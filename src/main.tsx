import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.post('/login', () => {
      return {
        status: 200,
        message: "Loggin Successfully"
      }
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
