import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme appearance='dark'>
        <App />
        <ToastContainer />
     </Theme>
  </React.StrictMode>
)
