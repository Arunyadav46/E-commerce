import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Utills/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
<BrowserRouter>
   <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </Context>


)