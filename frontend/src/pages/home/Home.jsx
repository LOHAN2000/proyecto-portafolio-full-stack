import React from 'react'

import anjhelo from '../../assets/anjhelo.jpg'
import mirella from '../../assets/mirella.png'
import gerardo from '../../assets/gerardo.jpeg'
import carlos from '../../assets/carlos.jpeg'

export const Home = () => {
  return (
    <section>
      <div className="w-full ">
        <div className="w-full md:w-3/5 mx-auto py-12 md:py-24">
          <div className="w-full flex flex-col text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 dark:text-white">
                Proyecto <span className="text-emerald-600">Portafolio</span>
            </h1>
            <p className="w-full px-[12%] mb-3 text-base md:text-xl whitespace-pre-line text-gray-500">
              Producto <span className="text-emerald-600">Académico</span> N°3 <br className="hidden lg:inline"/>¡Bienvenido(a) a nuestro portafolio! Aquí encontrarás información sobre nuestro trabajo académico y los proyectos que hemos desarrollado.</p>
          </div>
          <div className="flex flex-col md:flex-row px-2 md:px-6 md:pt-18 dark:text-white mt-8">
            <div className="w-full md:w-1/4 border-b-1 border-gray-100 text-gray-500  dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src={anjhelo} className="rounded-full h-24 w-24 object-cover" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Anjhelo Elvis Vela Yauri</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">@LOHAN2000</h2>
                
            </div>
            <div className="w-full mt-8 md:!mt-0 md:w-1/4 border-b-1 border-gray-100 text-gray-500   dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src={carlos} className="rounded-full h-24 w-24 object-cover" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Carlos Yudiño Quispe Qquecaño</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">@Yudinio-dev</h2>
                
            </div>
            <div className="w-full mt-8 md:!mt-0 md:w-1/4 border-b-1 border-gray-100 text-gray-500  dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src={gerardo} className="rounded-full h-24 w-24 object-cover" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Gerardo Campos Velasquez</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">@Gerardo-Campos</h2>
                
            </div>
            <div className="w-full mt-8 md:!mt-0 md:w-1/4 border-b-1 border-gray-100 text-gray-500  dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src={mirella} className="rounded-full h-24 w-24 object-cover" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Kelly Mirella Gavino Solis</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">@NilsKuesel0</h2>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
