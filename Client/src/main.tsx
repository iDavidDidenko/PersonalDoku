import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './pageStyle.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
