import React from 'react'



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
                <img src="https://img.freepik.com/fotos-kostenlos/schoene-gebirgslandschaft_23-2151151038.jpg?t=st=1733174665~exp=1733178265~hmac=d2a7496fee2a12e05f5d7ddc57243883283de2482c72eed7b3e0590e2d49e674&w=2000" className="rounded-full h-24 w-24" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Anjhelo Elvis Vela Yauri</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">Components</h2>
                <p className="font-base md:font-thin text-gray-500 mb-12 md:!mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="w-full mt-8 md:!mt-0 md:w-1/4 border-b-1 border-gray-100 text-gray-500   dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src="https://img.freepik.com/fotos-kostenlos/digitale-kunst-mond-tapete_23-2150918875.jpg?t=st=1733174604~exp=1733178204~hmac=b39a50a44f122f5a374cd20803f9d685207bd1f26b1df6b3174d3b1c78023fc0&w=2000" className="rounded-full h-24 w-24" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Carlos Yudiño Quispe Qquecaño</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">Elements</h2>
                <p className="font-base md:font-thin text-gray-500 mb-12 md:!mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="w-full mt-8 md:!mt-0 md:w-1/4 border-b-1 border-gray-100 text-gray-500  dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src="https://img.freepik.com/fotos-kostenlos/schoene-gebirgslandschaft_23-2151151047.jpg?t=st=1733174689~exp=1733178289~hmac=84650498808c057d748b113c1660275d262aebfe8ba1ea8778d7d29b5697b8ae&w=2000" className="rounded-full h-24 w-24" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Gerardo Campos Velasquez</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">Components</h2>
                <p className="font-base md:font-thin text-gray-500 mb-12 md:!mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="w-full mt-8 md:!mt-0 md:w-1/4 border-b-1 border-gray-100 text-gray-500  dark:border-gray-700 md:border-b-0 md:border-r md:border-gray-200 items-center text-center px-8 py-5 flex flex-col">
                <img src="https://img.freepik.com/fotos-kostenlos/schoene-gebirgslandschaft_23-2151151082.jpg?t=st=1733174635~exp=1733178235~hmac=c3b90133b81dacb2897cdef5f2daa46e120de8ed34caed25252f329316a7a4fc&w=2000" className="rounded-full h-24 w-24" alt="" title="" />
                <h1 className="mt-4 font-semibold text-gray-500 dark:text-white text-2xl">Kelly Mirella Gavino Solis</h1>
                <h2 className="mt-1 mb-4 text-gray-500 dark:text-gray-400 font-thin text-xl">Components</h2>
                <p className="font-base md:font-thin text-gray-500 mb-12 md:!mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
