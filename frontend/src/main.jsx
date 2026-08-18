import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Pages

import Home from './routes/Home.jsx'
import CreateParty from './routes/CreateParty.jsx'



const router = createBrowserRouter([
  {
    
  }
])
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
