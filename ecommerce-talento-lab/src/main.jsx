import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvemos la aplicación con BrowserRouter para habilitar el ruteo */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)