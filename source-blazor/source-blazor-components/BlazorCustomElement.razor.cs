using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace BlazorComponents
{
    public partial class BlazorCustomElement : IDisposable
    {
        private sealed record JsonMessage(string Message);
        private readonly JsonSerializerOptions _jsonSerializerOptions;
        private readonly DotNetObjectReference<BlazorCustomElement>? _callbackReference;

        private bool _isDisposed;
        private int _currentCount;

        private string _clientMessage; 
        private int _clientMessageCount;

        [Parameter]
        public string? ElementTitle { get; set; }

        public BlazorCustomElement()
        {
            _callbackReference = DotNetObjectReference.Create(this);
            _jsonSerializerOptions = new JsonSerializerOptions(JsonSerializerDefaults.Web);
            _clientMessage = "No message from client received.";
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
                await _jsRuntime.InvokeVoidAsync("BlazorInterop.addReference", _callbackReference);
        }

        [JSInvokable]
        public async Task OnMessageAsync(string json)
        {
            var jsonMessage = JsonSerializer.Deserialize<JsonMessage>(json, _jsonSerializerOptions);
            _clientMessage = jsonMessage?.Message ?? string.Empty;
            await InvokeAsync(StateHasChanged);
        }

        private async Task DispatchEventAsync()
        {
            var currentTime = DateTime.Now.ToString("HH:mm:ss");
            var jsonMessage = new JsonMessage($"{++_clientMessageCount}. Message from {ElementTitle} at {currentTime}.");
            var json = JsonSerializer.Serialize(jsonMessage, _jsonSerializerOptions);
            await _jsRuntime.InvokeVoidAsync("BlazorInterop.onDispatchEvent", json);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (_isDisposed)
                return;

            if (disposing)
                _callbackReference?.Dispose();

            _isDisposed = true;
        }
    }
}