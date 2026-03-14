import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import blazorLogo from './assets/blazor.svg'
import { setupAsync } from './blazor/blazor-component.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" target="_blank">
      <img src=${blazorLogo} class="logo blazor" alt="Blazor logo" />
    </a>
    <h1>Vite + TypeScript + Blazor</h1>
    <div class='flex-column-center'>
      <div class='card-blazor'>
        <blazor-custom-element-scoped element-title='Blazor Micro Frontend (Scoped)'></blazor-custom-element-scoped>
        <blazor-custom-element element-title='Blazor Micro Frontend (Unscoped)'></blazor-custom-element>
      </div>
      <div id='blazor-message'>No message from Blazor received.</div>
      <div class='card'>    
        <div>
            <button id="send-message" style="float:left;">Send message to Blazor</button>
            <button id="counter" type="button">Count is 0</button>
        </div>
      </div>
    </div>
    <p class='read-the-docs'>
      Click on the Vite, TypeScript or Blazor logo to learn more
    </p>
  </div>
`
const countButton = document.querySelector<HTMLButtonElement>('#counter');
const messageButton = document.querySelector<HTMLButtonElement>('#send-message');
await setupAsync(countButton!, messageButton!);