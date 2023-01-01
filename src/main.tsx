/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-02 03:03:52
 * @LastEditTime: 2023-01-02 03:40:07
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import 'virtual:windi.css'
import 'uno.css'

import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
)
