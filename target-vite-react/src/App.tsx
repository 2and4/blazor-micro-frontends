
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import blazorLogo from './assets/blazor.svg'
import BlazorComponent from './blazor/blazor-component'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" target="_blank">
          <img src={blazorLogo} className="logo blazor" alt="Blazor logo" />
        </a>
      </div>
      <h1>Vite + React + Blazor</h1>
      <BlazorComponent />
      <p className="read-the-docs">
        Click on the Vite, React or Blazor logo to learn more
      </p>
    </>
  )
}

export default App