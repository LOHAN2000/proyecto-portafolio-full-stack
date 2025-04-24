import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import useAuthStore from './stores/useAuthStore.js'
import { Home } from './pages/home/Home.jsx';
import { Login } from './pages/auth/login/Login.jsx';
import { Signup } from './pages/auth/signup/Signup.jsx';
import { MainLayout } from './layout/MainLayout.jsx';
import { Anjhelo } from './pages/portfolios/anjhelo-vela/Anjhelo.jsx';
import { Carlos } from './pages/portfolios/carlos-yudiño/Carlos.jsx';
import { Gerardo } from './pages/portfolios/gerardo-campos/Gerardo.jsx';
import { Mirella } from './pages/portfolios/mirella-gavino/Mirella.jsx';



function App() {

  const { user, checkAuth, loading } = useAuthStore();
// ------
  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className='text-white'>Cargando...</h1>
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
          <Route path='/anjhelo-vela' element={user ? <Anjhelo/> : <Navigate to='/login'/>}/>
          <Route path='/carlos-yudiño' element={user ? <Carlos/> : <Navigate to='/login'/>}/>
          <Route path='/gerardo-campos' element={user ? <Gerardo/> : <Navigate to='/login'/>}/>
          <Route path='/mirella-gavino' element={user ? <Mirella/> : <Navigate to='/login'/>}/>
        </Route>

        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
