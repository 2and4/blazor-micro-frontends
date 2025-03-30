# Blazor Micro Frontends ([.NET 9](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9/overview))

### Version 1.0.4

[Blazor Custom Elements](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/js-spa-frameworks?#blazor-custom-elements) offers the ability to use [ASP.NET Core Razor Components](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/) across various Single Page Applications (SPAs).

Building on this solution, this project provides a streamlined approach for creating micro-frontends with:

**ASP.NET Blazor**

* WebAssembly (wasm)
  * **[Show Example](https://2and4.github.io/blazor-micro-frontends/)**
* Server (x64/arm64)
  * Linux/MacOS/Windows

It validates usage with **Angular**, **Gatsby**, **Next.js**, **Remix**, and **Vite** (React/Vanilla/Vue), addresses communication between the micro-frontends and the hosting application, and includes a practical example of scoped styling for individual ASP.NET Blazor micro-frontend components.

- **[Architecture](/ARCHITECTURE.md)**
- **[Changelog](/CHANGELOG.md)**

### Setup Instructions
* **[Blazor Micro Frontends](https://www.npmjs.com/package/blazor-micro-frontends)**

## Key Advantages of Micro Frontends
* **Scalability** 
  * Independent teams can work on separate features.
* **Flexibility** 
  * Different technologies can be used for different parts.
* **Isolation** 
  * Errors in one frontend don't affect others.
* **Incremental Migration** 
  * Gradually modernize or replace legacy systems.
* **Independent Deployment**
  * Faster updates for specific parts of the application.

## Integration Example
### Provider

<table>
  <tr>
    <td align="center">
      <img src="/target-angular/public/img/blazor.svg" alt="ASP.NET Blazor" width="64" />
      <br /><strong>ASP.NET Blazor</strong>
      </br>(Server/WebAssembly)
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="/target-vite-vanilla/src/assets/dotnet.png" alt="DotNet" width="32" />
      <img src="/target-vite-vanilla/src/assets/typescript.svg" alt="TypeScript" width="32" />
      <br /><strong>.NET/TypeScript</strong>
    </td>
  </tr>
</table>

### Consumers

<table>
  <tr>
    <td align="center">
      <img src="/target-angular/public/favicon.ico" alt="Angular" width="64" />
      <br /><strong>Angular</strong>
    </td>
    <td align="center">
      <img src="/target-gatsby/src/images/gatsby.png" alt="Gatsby" width="64" />
      <br /><strong>Gatsby</strong>
    </td>
    <td align="center">
      <img src="/target-nextjs/public/nextjs.png" alt="NextJs" width="64" />
      <br /><strong>Next.js</strong>
    </td><td align="center">
      <img src="/target-remix/public/favicon.ico" alt="Remix" width="64" />
      <br /><strong>Remix</strong>
    </td>
    <td align="center">
      <img src="/target-vite-vanilla/src/assets/vite.svg" alt="Vite" width="64" />
      <br /><strong>Vite</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="/target-vite-vanilla/src/assets/typescript.svg" alt="TypeScript" width="32" />
      <br /><strong>TypeScript</strong>
    </td>
    <td align="center">
      <img src="/target-vite-react/src/assets/react.svg" alt="React" width="32" />
      <img src="/target-vite-vanilla/src/assets/typescript.svg" alt="TypeScript" width="32" />
      <br /><strong>React/TypeScript</strong>
    </td>
    <td align="center">
      <img src="/target-vite-react/src/assets/react.svg" alt="React" width="32" />
      <img src="/target-vite-vanilla/src/assets/typescript.svg" alt="TypeScript" width="32" />
      <br /><strong>React/TypeScript</strong>
    </td><td align="center">
      <img src="/target-vite-react/src/assets/react.svg" alt="React" width="32" />
      <img src="/target-vite-vanilla/src/assets/typescript.svg" alt="TypeScript" width="32" />
      <br /><strong>React/TypeScript</strong>
    </td>
    <td align="center">
      <img src="/target-vite-react/src/assets/react.svg" alt="React" width="32" />
      <img src="/target-vite-vanilla/src/assets/typescript.svg" alt="TypeScript" width="32" />
      <img src="/target-vite-vue/src/assets/vue.svg" alt="Vue.js" width="32" />
      <br /><strong>React/TypeScript/Vue</strong>
    </td>
  </tr>
</table>