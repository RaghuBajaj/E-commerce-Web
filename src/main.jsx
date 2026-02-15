import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ItemContextProvider from './Context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <StrictMode>
        <ItemContextProvider>
          <App />
        </ItemContextProvider>
      </StrictMode>,
    </BrowserRouter>
)
