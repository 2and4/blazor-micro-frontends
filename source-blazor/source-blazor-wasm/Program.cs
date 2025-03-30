using BlazorWasm;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

await WebAssemblyHostBuilder
    .CreateDefault(args)
    .AddBlazorComponents()
    .Build()
    .RunAsync();
