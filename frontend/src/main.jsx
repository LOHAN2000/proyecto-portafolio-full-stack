import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const base = import.meta.env.MODE === 'production' ? '/proyecto-portafolio-full-stack' : '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>
)