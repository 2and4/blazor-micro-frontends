import { BlazorInitializerClient } from 'blazor-micro-frontends';

declare global {
    interface Window {
        onBlazorReady: Promise<IBlazorInterop>;
    }
}
interface IBlazorInterop {
    sendMessageAsync(json: string): Promise<void>;
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export class BlazorComponentSetup {
    private messageCount: number = 0;
    private blazorInterop: IBlazorInterop | undefined;

    public async initializeAsync(): Promise<boolean> {
        const blazorInitialization = new BlazorInitializerClient('/blazor-components/');
        await blazorInitialization
            .useScripts('index.js')
            .useStyles('styles.css')
            .useLongPolling()
            .initializeAsync();

        this.blazorInterop = await window.onBlazorReady;
        this.addEventListener();
        return this.blazorInterop !== undefined;
    }

    private addEventListener(): void {
        this.blazorInterop?.addEventListener('message', event => {
            const customEvent = event as CustomEvent;
            const messageElement = document.getElementById('blazor-message');
            if (!customEvent || !messageElement)
                return;

            const messageDetail = customEvent.detail;
            messageElement.innerHTML = messageDetail.message;
        });
    }

    public sendMessage(): void {
        this.messageCount += 1;
        const data = { message: `${this.messageCount}. Message from client at ${this.getCurrentTime()}.` };
        this.blazorInterop?.sendMessageAsync(JSON.stringify(data));
    }

    private getCurrentTime(): string {
        return new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        }).format(new Date());
    }
}