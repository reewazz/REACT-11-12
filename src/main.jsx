import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './components/contexts/CounterContext.jsx'
import { AuthProvider } from './components/contexts/AuthContext.jsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>

     {/* /component */}
     <BrowserRouter>
         <MantineProvider>
     <AuthProvider>
     <CounterProvider>
  
          <App /> 
          </CounterProvider>
          </AuthProvider>

          </MantineProvider>


    </BrowserRouter>

  </StrictMode>,
)
