import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import UserList from './user/UserList'

import './styles/index.scss'

export default function App() {
  return (
    <div>
      <UserList />
    </div>
  )
}

const container = document.getElementById('root')
ReactDOM.createRoot(container).render(<App />)
