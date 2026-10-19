import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import AuthProvider from './context/AuthContext'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <AuthProvider>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App