using Microsoft.AspNetCore.Components.Web;

namespace BlazorComponents.Utils
{
    public static class BlazorCustomElementExtensions
    {
        public const string REGISTER_CUSTOM_ELEMENT = "blazor-custom-element";
        public const string REGISTER_CUSTOM_ELEMENT_SCOPED = "blazor-custom-element-scoped";

        public static void RegisterBlazorCustomElement(this IJSComponentConfiguration configuration)
            => configuration.RegisterCustomElement<BlazorCustomElement>(REGISTER_CUSTOM_ELEMENT);

        public static void RegisterBlazorCustomElementScoped(this IJSComponentConfiguration configuration)
            => configuration.RegisterCustomElement<BlazorCustomElementScoped>(REGISTER_CUSTOM_ELEMENT_SCOPED);
    }
}
