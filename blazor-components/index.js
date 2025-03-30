(function initialize() {
    const baseUrl = new URL(document.baseURI);
    const basePath = document.currentScript?.getAttribute('data-base-path') ?? '';
    const pathBase = `${baseUrl.pathname}${basePath}`.replace('//', '/');
    window.onBlazorReady = import('./_content/BlazorComponents/index.js').then(() => {
        return BlazorInterop.getInitializerFactory()
            .createInitializerWasm(pathBase)
            .startAsync()
            .then(() => BlazorInterop);
    });
})();