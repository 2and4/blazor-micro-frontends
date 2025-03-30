using Microsoft.AspNetCore.Components;

namespace BlazorComponents.Utils
{
    public partial class BlazorCustomScope
    {
        [Parameter]
        public RenderFragment? ChildContent { get; set; }
    }
}
