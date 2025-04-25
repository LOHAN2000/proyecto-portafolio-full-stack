import React from 'react';
import mirella from './img/mirella-perfil.png';

export const Mirella = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-zinc-900 to-blue-900 font-poppins">
      <main className="pt-24 container mx-auto flex-1 space-y-20 px-6 md:px-12">
        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 blur-2xl opacity-30 rounded-full"></div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Hey Hola, Yo soy Mirella!
            </h1>
            <p className="text-lg text-gray-200">
              Me apasiona la tecnología y la innovación, y estoy en constante aprendizaje para combinar mis conocimientos técnicos con una orientación al usuario
            </p>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Download CV <i className="ri-arrow-right-up-line ri-lg" />
            </a>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src={mirella}
              alt="Mirella Gavino"
              className="rounded-full w-64 h-64 object-cover object-center shadow-2xl border-4 border-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-origin-border p-1"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">Sobre mi</h2>
          <div className="grid md:grid-cols-2 gap-12 backdrop-blur-sm">
            <div className="space-y-6">
              <p className="text-gray-200">
                Soy estudiante de Ingeniería de Sistemas con una sólida trayectoria laboral desde los 17 años en diversos sectores.
                He trabajado como profesora de matemáticas, en atención al cliente, como cajera y actualmente en el área de desarrollo de clientes.
                A lo largo de mi experiencia, he desarrollado habilidades en resolución de problemas, comunicación efectiva y gestión de clientes,
                combinando mi formación en tecnología con un enfoque centrado en el usuario. Estoy en constante aprendizaje y busco aplicar mis conocimientos 
                en entornos dinámicos donde pueda aportar soluciones innovadoras.
              </p>
              <p className="text-gray-200">
                Trabajo en servicios de docencia en matemáticas, Elo Boosting en videojuegos competitivos y atención al cliente, garantizando calidad, eficiencia y un enfoque personalizado.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'SASS', 'Bootstrap', 'Tailwind', 'JS', 'TS', 'React', 
                'Next.js', 'Node', 'Express', 'Eloboosting', 'MySQL', 'SBS', 'AWS'].map((skill) => (
                <li 
                  key={skill}
                  className="px-4 py-3 bg-gradient-to-br from-pink-500/30 to-purple-600/30 text-gray-200 rounded-full shadow-md hover:from-pink-500 hover:to-purple-600 transition-all cursor-pointer hover:shadow-pink-400/20"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="relative">
          <div className="absolute -inset-4 bg-gradient-to-bl from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">Experiencia</h2>
          <div className="space-y-8 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-pink-500/30">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-pink-200">Atencion al cliente</h3>
                  <p className="text-purple-200">Desarrollo de Clientes</p>
                </div>
                <span className="text-sm text-purple-300">Febrero 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside text-purple-100">
                <li>Identificación de oportunidades</li>
                <li>Aumentar la satisfacción y retención de clientes</li>
              </ul>
            </div>

            {/* Resto de secciones manteniendo el mismo formato */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6 rounded-lg shadow-lg backdrop-blur-lg border border-blue-500/30 mt-6">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h3 className="text-xl font-semibold text-blue-200">Docente</h3>
      <p className="text-purple-200">Clases Particulares</p>
    </div>
    <span className="text-sm text-purple-300">Mayo 2017 - Julio 2019</span>
  </div>
  <ul className="list-disc list-inside text-purple-100">
    <li>Adaptación del contenido y metodología según el nivel</li>
    <li>Cursos: Algebra, Trigonometria, Fisica, Geometria, Quimica</li>
  </ul>
</div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-16 bg-zinc-900/50 backdrop-blur-sm">
  <div className="container mx-auto px-4 md:px-8">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center">
      Servicios
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Desarrollo Web */}
      <div className="bg-zinc-800 p-8 rounded-2xl border border-pink-500/30 hover:border-purple-400 transition-all">
        <div className="w-12 h-12 mb-6 text-purple-400">
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-pink-200 mb-4">Desarrollo Web</h3>
        <p className="text-gray-300 leading-relaxed">
          Creación de sitios web y aplicaciones modernas con las últimas tecnologías: React, Next.js y Tailwind CSS.
        </p>
      </div>

      {/* Diseño UI/UX */}
      <div className="bg-zinc-800 p-8 rounded-2xl border border-blue-500/30 hover:border-purple-400 transition-all">
        <div className="w-12 h-12 mb-6 text-blue-400">
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-blue-200 mb-4">Diseño UI/UX</h3>
        <ul className="text-gray-300 space-y-2 list-disc pl-5">
          <li>Interfaces centradas en el usuario</li>
          <li>Prototipado interactivo</li>
          <li>Sistemas de diseño consistentes</li>
        </ul>
      </div>

      {/* Optimización SEO */}
      <div className="bg-zinc-800 p-8 rounded-2xl border border-green-500/30 hover:border-purple-400 transition-all">
        <div className="w-12 h-12 mb-6 text-green-400">
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-green-200 mb-4">Optimización SEO</h3>
        <ul className="text-gray-300 space-y-2 list-disc pl-5">
          <li>SEO técnico avanzado</li>
          <li>Optimización de contenido</li>
          <li>Mejora de posicionamiento</li>
        </ul>
      </div>
    </div>
  </div>
</section>

        {/* Resto de secciones con el mismo patrón de estilos */}
        {/* Projects Section - Completo */}
<section id="projects" className="relative py-16 border-t border-purple-500/30">
  <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent mb-12">
    Mi Blog
  </h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Proyecto 1 */}
    <a href="https://www.canva.com/design/DAF-lGSm1xY/qWtsd3dx-7ON_QmRdti5Fw/edit" 
       className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-pink-500/30">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pink-200 mb-3">La pasión por enseñar</h3>
        <p className="text-purple-100 leading-relaxed">
          Uno de mis primeros pasos en el mundo laboral fue la docencia particular en matemáticas.
          Brindar apoyo a estudiantes me permitió desarrollar habilidades pedagógicas, paciencia 
          y capacidad de adaptación a diferentes estilos de aprendizaje.
        </p>
        <div className="mt-4 flex items-center text-purple-300">
          <span className="text-sm">Enero 18, 2015</span>
          <i className="ri-arrow-right-up-line ml-2"></i>
        </div>
      </div>
    </a>

    {/* Proyecto 2 */}
    <a href="https://www.makro.pe/" 
       className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-blue-500/30">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-200 mb-3">Comunicación y Organización</h3>
        <p className="text-purple-100 leading-relaxed">
          Experiencia en atención al cliente y caja: desarrollo de habilidades en resolución de problemas,
          gestión de tiempo y comunicación efectiva bajo presión, garantizando experiencias satisfactorias.
        </p>
        <div className="mt-4 flex items-center text-purple-300">
          <span className="text-sm">Agosto 18, 2016</span>
          <i className="ri-arrow-right-up-line ml-2"></i>
        </div>
      </div>
    </a>

    {/* Proyecto 3 */}
    <a href="https://www.makro.pe/" 
       className="bg-gradient-to-br from-green-500/20 to-purple-600/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-green-500/30">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-200 mb-3">Soluciones Innovadoras</h3>
        <p className="text-purple-100 leading-relaxed">
          Desarrollo de clientes combinando habilidades técnicas y de comunicación para crear relaciones sólidas,
          identificando oportunidades de mejora y ofreciendo soluciones con impacto real.
        </p>
        <div className="mt-4 flex items-center text-purple-300">
          <span className="text-sm">Febrero 03, 2025</span>
          <i className="ri-arrow-right-up-line ml-2"></i>
        </div>
      </div>
    </a>
  </div>
</section>

{/* Contact Section - Completo */}
<section id="contact" className="relative py-16 border-t border-purple-500/30">
  <div className="max-w-[1800px] mx-auto">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-12">
      Contáctame
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12 text-gray-300">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed max-w-md">
          ¿Tienes un proyecto en mente o quieres colaborar juntos? 
          ¡Hablemos sobre cómo puedo ayudarte!
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 hover:text-pink-300 transition-colors">
            <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
            </svg>
            <span>mgavino614@gmail.com</span>
          </div>
          
          <div className="flex items-center space-x-3 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>+51 900661827</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-6 justify-end items-start">
        <a href="#" className="text-purple-300 hover:text-pink-400 transition-colors transform hover:scale-110">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </a>

        <a href="#" className="text-purple-300 hover:text-blue-400 transition-colors transform hover:scale-110">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
          </svg>
        </a>

        <a href="#" className="text-purple-300 hover:text-blue-600 transition-colors transform hover:scale-110">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>

    <div className="mt-16 pt-8 border-t border-purple-500/30 text-center text-purple-300 text-sm">
      © 2025 Universidad Continental
    </div>
  </div>
</section>
        
      </main>
    </div>
  );
};