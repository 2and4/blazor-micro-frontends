using Microsoft.AspNetCore.Components;

namespace BlazorComponents
{
    public partial class BlazorCustomElementScoped
    {
        [Parameter]
        public string? ElementTitle { get; set; }
    }
}
