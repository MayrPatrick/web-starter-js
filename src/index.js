import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import User from './User'

import './styles/index.scss'

export default function App() {
  return (
    <div className="center">
      <User></User>
    </div>
  )
}

const container = document.getElementById('root')
ReactDOM.createRoot(container).render(<App />)
