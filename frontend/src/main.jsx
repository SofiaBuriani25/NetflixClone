import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// createRoot dice a React dove "montare" l'app nel file index.html
// '#root' è un div vuoto che si trova in frontend/index.html
// Con 'render' React riempie quel div con tutta App ("React, prendi il componente App e inseriscilo dentro il div con id root”)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)