import { useState } from 'react'
import './App.css'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
