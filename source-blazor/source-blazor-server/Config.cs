using BlazorComponents.Pages;
using BlazorComponents.Utils;

namespace BlazorServer
{
    internal static class Config
    {
        public static WebApplicationBuilder AddBlazorComponents(this WebApplicationBuilder builder)
        {
            var services = builder.Services;
            services.AddRazorPages();
            services.AddServerSideBlazor(options =>
            {
                var rootComponents = options.RootComponents;
                rootComponents.RegisterBlazorCustomElement();
                rootComponents.RegisterBlazorCustomElementScoped();
            });
            return builder;
        }

        public static WebApplication UseBlazorComponents(this WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.MapRazorComponents<BlazorComponentsPage>();
                app.UseDeveloperExceptionPage();
                app.MapBlazorHub();
            }
            else
            {
                app.UseHsts();
                app.UseHttpsRedirection();
                app.MapBlazorHub("/blazor-components/_blazor");
            }
            app.UseAntiforgery();
            app.UsePathBase("/blazor-components");
            app.UseDefaultFiles();
            app.UseStaticFiles();
            return app;
        }
    }
}
