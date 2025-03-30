import { BlazorInitializerServer, BlazorInitializerWasm, IBlazorInitializerServer, IBlazorInitializerWasm } from 'blazor-micro-frontends';
import { BrotliDecode } from '../decoders/decode.min';

export interface IBlazorInitializerFactory {
    createInitializerServer(pathBase: string, longPolling: boolean): IBlazorInitializerServer;
    createInitializerWasm(pathBase: string): IBlazorInitializerWasm;
}
export class BlazorInitializerFactory implements IBlazorInitializerFactory {
    private readonly brotliFileExtension = '.br';

    public createInitializerServer(pathBase: string, longPolling: boolean): IBlazorInitializerServer {
        return new BlazorInitializerServer(pathBase, longPolling);
    }

    public createInitializerWasm(pathBase: string): IBlazorInitializerWasm {
        const blazorWasmInitializer = new BlazorInitializerWasm(pathBase);
        return blazorWasmInitializer.useDecoder(BrotliDecode, this.brotliFileExtension);
    }
}