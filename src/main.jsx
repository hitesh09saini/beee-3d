import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PositionProvider } from './Context/StateContext.jsx'

createRoot(document.getElementById('root')).render(
  <PositionProvider>
    <App />
  </PositionProvider>,
)
