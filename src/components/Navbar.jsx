import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
   const {user, logout} = useContext(AuthContext); 
  return (
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/ ">ShopHub</Link>
            <div className='nabar-links'>
                <Link to="/" className='navbar-link'>Home</Link>
                <Link to="/checkout" className='navbar-link'>Cart</Link>
            </div>
            <div className='navbar-auth'>
                {!user ? (
                <div className='navbar-auth-links'>
                    <Link to="/auth" className='btn btn-secondary'>Login</Link>
                    <Link to="/auth" className='btn btn-primary'>Signup</Link>
                </div>
                ) : (
                    <div className=''>
                        <span className='navbar-greeting'>Hello, {user.email}</span>
                        <button className='btn btn-secondary' onClick={logout}>Logout</button>
                    </div>
                )} 
            </div>
        </div>
        
    </nav>
    
  )
}

export default Navbar