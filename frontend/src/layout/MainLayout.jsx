import React from 'react'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className='h-screen bg-black text-white px-4'>
       <Navbar/>
       <Outlet/>
    </div>
  )
}
