using BlazorServer;

await WebApplication
    .CreateBuilder(args)
    .AddBlazorComponents()
    .Build()
    .UseBlazorComponents()
    .RunAsync();