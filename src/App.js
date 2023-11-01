import "./App.css"
import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from "./components/Forms/Login"
import Home from "./components/Forms/Home";
import Register from "./components/Forms/Register"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <div className='navbar'>
    <NavLink to='/' className='nav'>Home</NavLink>
    <NavLink to='/register' className='nav'>Register</NavLink>
    <NavLink to='/login' className='nav'>Login</NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
