import React from 'react'
// Advertencias importantes para trabajar en este proyecto:
// 1. No modifiques ninguna carpeta o archivo que no se te haya designado.
// 2. No uses estilos en línea (style) ni modifiques directamente los archivos CSS globales.
// 3. Asegúrate de que las imágenes que importes estén en la carpeta "img" correspondiente a tu proyecto.
// 4. Usa rutas relativas correctas para importar imágenes o archivos estáticos.
//    Ejemplo: import mirella from './img/mirella.png';
// 5. No elimines ni modifiques componentes o secciones que no sean parte de tu tarea asignada.
// 6. Sigue las convenciones de nombres y estilos establecidos en el proyecto.
// 7. Antes de subir cambios, verifica que tu código no rompa otras partes del proyecto.
// 8. Si tienes dudas, consulta con el lider antes de realizar modificaciones importantes.
// 9. No uses librerías externas sin aprobación previa del equipo.

// Para importar imágenes en tu proyecto, sigue estos pasos:
// 1. Guarda la imagen en la carpeta "img" dentro de tu proyecto.
//    Por ejemplo: "src/pages/portfolios/mirella-gavino/img/mirella.png"
// 2. Usa la palabra clave "import" para traer la imagen al archivo donde la necesitas.
//    Ejemplo: import mirella from './img/mirella.png';
// 3. Luego, usa la variable (en este caso "mirella") en una etiqueta <img> para mostrar la imagen.
//    Ejemplo: <img src={mirella} alt="Descripción de la imagen" />
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
import carlos from './img/carlos-perfil.jpeg'

export const Carlos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black font-poppins">
          <main className="pt-24 container mx-auto flex-1 space-y-20 px-6 md:px-12">
            {/* Hero Section */}
            <section id="home" className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                  ¡Hola Soy, Soy Carlos Yudiño!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                "Full Stack Dev & Diseño | Código ➜ UX intuitiva potenciada con IA"
                </p>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-700 transition-all"
                >
                  Download CV <i className="ri-arrow-right-up-line ri-lg" />
                </a>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={carlos}
                  alt="Anurag Gharat"
                  className="rounded-full w-64 h-64 object-cover object-center shadow-2xl border-4 border-amber-600"
                />
              </div>
            </section>
    
            {/* About Section */}
              <section id="about">
  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Sobre mi</h2>

  <p className="mb-4">
    Ingeniero full-stack peruano especializado en arquitecturas escalables. Combino JavaScript/TypeScript, Python y bases de datos SQL/NoSQL con principios de IA para crear soluciones que simplifican lo complejo. Mi obsesión técnica se centra en código limpio, UX intuitiva y automatizaciones que sorprenden, respaldadas por entornos DevOps automatizados con Docker y AWS para escalabilidad real.
  </p>

  <div className="space-y-2 mt-4">
    <p className="flex items-baseline">
      <span className="mr-2">+</span>
      <span><strong>DevOps:</strong> Automatizo entornos con Docker y AWS para escalabilidad real.</span>
    </p>
    <p className="flex items-baseline">
      <span className="mr-2">+</span>
      <span><strong>Innovación:</strong> Líneas de código con ADN peruano: precisión andina y creatividad sin límites.</span>
    </p>
    <p className="flex items-baseline">
      <span className="mr-2">+</span>
      <span><strong>Meta:</strong> Que cada sistema que diseño sea un puente entre tecnología y propósito humano.</span>
    </p>
  </div>
</section>




    
            {/* Work Experience Section */}


            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Sol del Pacífico</h3>
      <p className="text-gray-600 dark:text-gray-300">Coordinador de TI</p>
    </div>
    <span className="text-sm text-gray-500 dark:text-gray-400">Mar 2021 - May 2022</span>
  </div>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
    <li>Supervisión de infraestructura tecnológica</li>
    <li>Implementación de medidas de ciberseguridad</li>
    <li>Gestión y mantenimiento de sistemas operativos</li>
  </ul>
</div>

<div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tracklog Personal</h3>
      <p className="text-gray-600 dark:text-gray-300">Soporte de Equipos MDVR con IA</p>
    </div>
    <span className="text-sm text-gray-500 dark:text-gray-400">Jun 2022 - Presente</span>
  </div>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
    <li>Diagnóstico y mantenimiento de equipos de monitoreo</li>
    <li>Análisis predictivo de fallos con inteligencia artificial</li>
    <li>Integración con sistemas de gestión de flotas</li>
  </ul>
</div>







    
            <section id="services" className="bg-black py-16  border-t flex w-full  border-gray-800 border-b-2">
                <div className="max-w-[1800px] mx-auto">
                    <h2 className="text-4xl font-bold text-gray-100 mb-12 pb-4  border-gray-800">
                    Servicios
                    </h2>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Tarjeta 1 */}
                    <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all hover:transform hover:scale-105">
                        <div className="w-12 h-12 mb-6 text-purple-400">
                        <svg aria-hidden="true" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Desarrollo Web</h3>
                        <p className="text-gray-400 leading-relaxed">
                        Creación de sitios web y aplicaciones modernas con las últimas tecnologías: React, Next.js y Tailwind CSS.
                        </p>
                    </div>
    
                    {/* Tarjeta 2 */}
                    <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all hover:transform hover:scale-105">
                        <div className="w-12 h-12 mb-6 text-blue-400">
                        <svg aria-hidden="true" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                        </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Diseño UI/UX</h3>
                        <p className="text-gray-400 leading-relaxed">
                        Diseño de interfaces centrado en el usuario, prototipado interactivo y sistemas de diseño consistentes.
                        </p>
                    </div>
    
                    {/* Tarjeta 3 */}
                    <div className="bg-zinc-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all hover:transform hover:scale-105">
                        <div className="w-12 h-12 mb-6 text-green-400">
                        <svg aria-hidden="true" className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Optimización SEO</h3>
                        <p className="text-gray-400 leading-relaxed">
                        Mejora del posicionamiento web con técnicas avanzadas de SEO técnico y optimización de contenido.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
    


{/* Projects Section */}
<section id="projects">
  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Proyectos</h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Proyecto 1 */}
    <div className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">🧰 Sistema Help Desk</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Plataforma para registrar y dar seguimiento a incidencias de TI.</p>
      </div>
      <ul className="list-disc list-inside text-gray-400 text-sm">
        <li>Desarrollado con Flask y PostgreSQL</li>
        <li>Dashboard intuitivo para técnicos y usuarios</li>
        <li>Soporte de notificaciones por correo</li>
      </ul>
    </div>

    {/* Proyecto 2 */}
    <div className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">📍 Panel de Monitoreo Vehicular</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Interfaz de seguimiento y análisis de flotas con IA.</p>
      </div>
      <ul className="list-disc list-inside text-gray-400 text-sm">
        <li>Desarrollado en React + Node.js + MongoDB</li>
        <li>Vista en tiempo real con mapas y alertas</li>
        <li>Predicción de fallas mediante modelos ML</li>
      </ul>
    </div>

    {/* Proyecto 3 */}
    <div className="bg-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">⚙️ Optimizador de Recursos TI</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Aplicación para analizar el uso de recursos y proponer mejoras.</p>
      </div>
      <ul className="list-disc list-inside text-gray-400 text-sm">
        <li>Hecho con Python, Dash y Pandas</li>
        <li>Visualización de métricas clave en tiempo real</li>
        <li>Recomendaciones automáticas basadas en datos</li>
      </ul>
    </div>

  </div>
</section>





    
            {/* Contact Section */}
            <section id="contact" className="bg-black py-16  border-t border-gray-800">
                <div className="max-w-[1800px] mx-auto">
                    <h2 className="text-4xl font-bold text-gray-100 mb-12 pb-4 border-gray-800">
                    Contáctame
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 text-gray-400 justify-between">
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed">
                        ¿Tienes una idea de proyecto o necesitas apoyo en el desarrollo tecnológico?  
                        <br className="hidden md:block" /> Estoy disponible para colaborar en soluciones eficientes y profesionales.
                        </p>
                        
                        <div className="space-y-4">
                        <div className="flex items-center space-x-3 hover:text-white transition-colors">
                            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                            </svg>
                            <span>carlosdraxler8@gmail.com</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 hover:text-white transition-colors">
                            <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <span>+51-963214880</span>
                        </div>
                        </div>
                    </div>
    
                    <div className="space-y-8">
                    <div className="flex space-x-6 justify-end">
                        {/* GitHub */}
                        <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                            </svg>
                        </a>
    
                        {/* X (Twitter) */}
                        <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <span className="sr-only">X (Twitter)</span>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                            </svg>
                        </a>
    
                        {/* LinkedIn */}
                        <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
                    </div>
                    </div>
    
                    <div className="mt-16 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-500 text-sm">
                        © 2025 Universidad Continental
                    </p>
                    </div>
                </div>
                </section>
          </main>
        </div>
  )
}
