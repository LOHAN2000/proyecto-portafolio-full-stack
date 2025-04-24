import React, { useState } from 'react'
import useAuthStore from '../../../stores/useAuthStore.js';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo-continental-negro-1.png'

export const Signup = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullname: ''
  });

  const { register, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    navigate('/')
  };

  return (
    <div className='h-screen bg-black'>
      <div className='flex h-full justify-center items-center'>
        <div className='flex flex-col  w-4/6 sm:min-w-2/3 max-w-[1200px] justify-center items-center p-4 gap-y-3 sm:gap-y-1'>
          <div className='size-40 sm:size-60 items-center justify-center'>
            <img src={logo} alt='logo' className='w-full h-full object-cover aspect-square object-center'/>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full sm:w-2/4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="text-white text-md">Username</label>
                  <input onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})} className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm md:text-md font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" id="email" placeholder="username" type="text" name="username" />
                  <label className="text-zinc-950 mt-2 dark:text-white text-md" >Fullname</label>
                  <input onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})} placeholder="Fullname" className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm md:text-md font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" name="fullname"/>
                  <label className="text-zinc-950 mt-2 dark:text-white text-md" >Email</label>
                  <input onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})} placeholder="Email" type='email' className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm md:text-md font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" name="email"/>
                  <label className="text-zinc-950 mt-2 dark:text-white text-md" >Password</label>
                  <input onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})} placeholder="Password" type="password" className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm md:text-md font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400" name="password"/>
                  {error && (
                    <h1 className='text-red-500'>{error}</h1>
                  )}
                </div>
                <button className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium cursor-pointer" type="submit">
                  {loading ? <h1 className='animate-spin'>✖</h1> : 'Registrarse'}
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}
