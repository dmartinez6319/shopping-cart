import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import { RouterProvider } from 'react-router'
import router from './router'

import "@fontsource/montserrat"; // Defaults to weight 400

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
