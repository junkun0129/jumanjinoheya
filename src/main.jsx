import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import logger from "redux-logger";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
    
  </React.StrictMode>
)
