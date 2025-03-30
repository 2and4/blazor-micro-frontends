import '../assets/styles.css';
import { BlazorInterop } from './interops/blazor-interop';

declare global {
    interface Window {
        [key: string]: any;
    }
}
window['BlazorInterop'] = new BlazorInterop();