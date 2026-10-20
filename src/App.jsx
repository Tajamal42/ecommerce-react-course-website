import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import AuthProvider from './context/AuthContext'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <div className='app'>
      <AuthProvider>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App