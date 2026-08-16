import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './components/contexts/CounterContext.jsx'
import { AuthProvider } from './components/contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

     {/* /component */}
     <BrowserRouter>
     <AuthProvider>
     <CounterProvider>
          <App /> 
          </CounterProvider>
          </AuthProvider>


    </BrowserRouter>

  </StrictMode>,
)
