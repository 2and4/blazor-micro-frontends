using BlazorComponents.Pages;
using BlazorComponents.Utils;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace BlazorWasm
{
    internal static class Config
    {
        public static WebAssemblyHostBuilder AddBlazorComponents(this WebAssemblyHostBuilder builder)
        {
            var rootComponents = builder.RootComponents;
            rootComponents.RegisterBlazorCustomElement();
            rootComponents.RegisterBlazorCustomElementScoped();

            if (builder.HostEnvironment.IsDevelopment())
                rootComponents.Add<BlazorComponentsPageContent>("#blazor-components");
            
            return builder;
        }
    }
}
