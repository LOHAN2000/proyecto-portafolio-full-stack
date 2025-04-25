import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo-continental-negro-1.png'
import useAuthStore from '../../stores/useAuthStore';

export const Navbar = () => {

  const [isSelected, setIsSelected] = useState('');
  const { logout } = useAuthStore();

//  --
  return (
    <nav className='block w-full max-w-screen mx-auto shadow z-[9999]'>
      <div className='flex flex-wrap items-center justify-between mx-auto text-white px-5 py-2'>
        <Link to={'/'} onClick={() => setIsSelected('')} className='flex items-center gap-x-3'>
          <div className='size-10'>
            <img src={logo} alt='logo' className='w-full h-full object-cover object-center aspect-square'/>
          </div>
          <h1 className='font-semibold'>Proyecto Portafolio - Grupo G</h1>
        </Link>
        <div className='flex'>
          <ul className='flex gap-x-5 '>
            <li>
              <Link  onClick={() => setIsSelected('anjhelo-vela')} to={'/anjhelo-vela'}>
                <p className={`hover:text-slate-500 ${isSelected === 'anjhelo-vela' ? 'text-white' : 'text-slate-600'}`}>Anjhelo Vela</p>
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSelected('carlos-yudiño')} to={'/carlos-yudiño'}>
                <p className={`hover:text-slate-500 ${isSelected === 'carlos-yudiño' ? 'text-white' : 'text-slate-600'}`}>Carlos Yudiño</p>
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSelected('gerardo-campos')} to={'gerardo-campos'}>
                <p className={`hover:text-slate-500 ${isSelected === 'gerardo-campos' ? 'text-white' : 'text-slate-600'}`}>Gerardo Campos</p>
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsSelected('mirella-gavino')} to={'/mirella-gavino'}>
                <p className={`hover:text-slate-500 ${isSelected === 'mirella-gavino' ? 'text-white' : 'text-slate-600'}`}>Mirella Gavino</p>
              </Link>
            </li>
            <li onClick={logout} className='flex items-center justify-center my-auto'>
              <p className='text-red-500/80 text-center hover:text-red-500 cursor-pointer'>{'Salir >'}</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
