import "./blazor-component.css";
import { BlazorComponentSetup } from "./blazor-component-setup";

class BlazorComponent {
    private count: number = 0;
    private readonly blazorComponentSetup: BlazorComponentSetup;

    public constructor() {
        this.blazorComponentSetup = new BlazorComponentSetup();
    }

    public async initializeAsync(): Promise<void> {
        await this.blazorComponentSetup.initializeAsync();
    }

    public incrementCount(countButton: HTMLButtonElement): void {
        this.count += 1;
        countButton.innerHTML = `Count is ${this.count}`;
    }

    public sendMessage(): void {
        this.blazorComponentSetup.sendMessage();
    }
}

export async function setupAsync(countButton: HTMLButtonElement, messageButton: HTMLElement): Promise<void> {
    const blazorComponent = new BlazorComponent();
    await blazorComponent.initializeAsync();
    countButton.addEventListener('click', () => {
        blazorComponent.incrementCount(countButton);
    });
    messageButton.addEventListener('click', () => {
        blazorComponent.sendMessage();
    });
}