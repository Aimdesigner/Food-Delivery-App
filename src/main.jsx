import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </StrictMode>,
)
