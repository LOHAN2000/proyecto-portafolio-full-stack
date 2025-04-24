import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home/Home'
import { Login } from '../pages/auth/login/Login.jsx'
import { Signup } from '../pages/auth/signup/Signup.jsx'
import useAuthStore from './stores/useAuthStore.js'


function App() {

  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [])

  console.log(user)

  return (
    <>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
