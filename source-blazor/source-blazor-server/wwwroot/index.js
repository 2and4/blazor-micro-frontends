(function initialize() {
    const appName = 'BlazorServer';
    const baseUrl = new URL(document.baseURI);
    const basePath = document.currentScript?.getAttribute('data-base-path') ?? '';
    const pathBase = `${baseUrl.pathname}${basePath}`.replace('//', '/');
    const longPolling = document.currentScript?.getAttribute('data-long-polling') === 'true';
    window.onBlazorReady = import('./_content/BlazorComponents/index.js').then(() => {
        return BlazorInterop.getInitializerFactory()
            .createInitializerServer(pathBase, longPolling)
            .useModulesLoader(appName)
            .startAsync()
            .then(() => BlazorInterop);
    });
})();