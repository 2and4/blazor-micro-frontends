import { IBlazorComponentReference } from "blazor-micro-frontends";
import { IBlazorInitializerFactory, BlazorInitializerFactory } from "../factories/blazor-initializer-factory";

export interface IBlazorInterop {
    getInitializerFactory(): IBlazorInitializerFactory;
    sendMessageAsync(json: string): Promise<void>;
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export class BlazorInterop extends EventTarget implements IBlazorInterop {
    private readonly eventMessage: string = 'message';
    private readonly references: IBlazorComponentReference[] = [];

    public getInitializerFactory(): IBlazorInitializerFactory {
        return new BlazorInitializerFactory();
    }

    public addReference(reference: IBlazorComponentReference): void {
        this.references.push(reference);
    }

    public async sendMessageAsync(json: string): Promise<void> {
        if (!this.references) {
            console.error('No interop callbacks added.');
            return;
        }
        this.references.forEach(async reference => {
            await reference.invokeMethodAsync('OnMessageAsync', json);
        });
    }

    public onDispatchEvent(json: string) {
        const detail = JSON.parse(json);
        const event = new CustomEvent(this.eventMessage, { detail: detail });
        this.dispatchEvent(event);
    }
}