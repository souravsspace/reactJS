import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.tsx"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./css/tailwind.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
