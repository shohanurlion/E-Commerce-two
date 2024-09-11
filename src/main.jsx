import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApi } from './Components/ContextApi.jsx'
import Store from './Store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>

)
