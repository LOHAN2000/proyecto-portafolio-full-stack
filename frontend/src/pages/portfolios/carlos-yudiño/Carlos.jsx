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
import experiencia1 from './img/sol-del-pacifico.jpeg'
import experiencia2 from './img/tracklog-it.jpeg'

import './carlos.css'
export const Carlos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black font-poppins">
          <main className="pt-24 container mx-auto flex-1 space-y-20 px-6 md:px-12">




            {/* Hero Section */}
            <section
  id="home"
  className="flex flex-col md:flex-row items-center gap-10 bg-black text-white py-24 px-6 md:px-12"
>
  <div className="flex-1 space-y-6 animate-fade-in">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight relative group">
      ¡Hola, soy Carlos Yudiño!
      <span className="block h-1 w-24 bg-amber-500 mt-2 rounded transition-all group-hover:w-32"></span>
    </h1>
    <p className="text-lg text-gray-400">
      🚀 Full Stack Dev & Diseño | Código ➜ UX intuitiva potenciada con IA
    </p>
    <a
      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:scale-105"
    >
      📄 Descargar CV <i className="ri-arrow-right-up-line ri-lg" />
    </a>
  </div>

  <div className="flex-1 flex justify-center">
    <img
      src={carlos}
      alt="Carlos Yudiño"
      className="rounded-full w-64 h-64 object-cover object-center shadow-[0_0_25px_rgba(245,158,11,0.6)] border-4 border-amber-500 hover:scale-105 transition-transform duration-500"
    />
  </div>
</section>



{/* About Section */}
<section id="about" className="bg-black text-gray-200 py-20 px-6 md:px-16 transition-all duration-500">
  <h2 className="text-4xl font-extrabold text-amber-500 mb-10 border-b-4 border-amber-500 inline-block pb-2 animate-fade-in-down">
    🧑‍💻 Sobre mí
  </h2>

  <p className="text-lg leading-relaxed text-gray-300 mb-10 animate-fade-in-up">
    Soy un <span className="text-amber-500 font-semibold">ingeniero full-stack peruano</span> especializado en <span className="text-amber-500 font-semibold">arquitecturas escalables</span>. Trabajo con tecnologías como <span className="text-green-400">JavaScript/TypeScript</span>, <span className="text-green-400">Python</span>, y bases de datos <span className="text-green-400">SQL/NoSQL</span>. Aplico principios de <span className="text-pink-400">inteligencia artificial 🤖</span> para simplificar sistemas complejos, enfocándome en <span className="italic text-white">código limpio</span>, <span className="italic text-white">UX intuitiva</span> y <span className="italic text-white">automatizaciones impactantes</span>. Utilizo herramientas <span className="text-blue-400">DevOps ⚙️</span> como Docker y AWS para lograr entornos escalables y eficientes.
  </p>

  <div className="space-y-6 mt-6 animate-fade-in-up">
    <p className="flex items-start text-gray-300 hover:scale-105 transition-transform">
      <span className="text-amber-500 text-2xl mr-4">🔧</span>
      <span><strong className="text-white">DevOps:</strong> Automatizo entornos con Docker y AWS para escalabilidad real.</span>
    </p>
    <p className="flex items-start text-gray-300 hover:scale-105 transition-transform">
      <span className="text-amber-500 text-2xl mr-4">🌟</span>
      <span><strong className="text-white">Innovación:</strong> Código con ADN peruano: precisión andina y creatividad sin límites.</span>
    </p>
    <p className="flex items-start text-gray-300 hover:scale-105 transition-transform">
      <span className="text-amber-500 text-2xl mr-4">🎯</span>
      <span><strong className="text-white">Meta:</strong> Que cada sistema sea un puente entre tecnología y propósito humano.</span>
    </p>
  </div>

  <div className="mt-12 space-y-4 animate-fade-in-up">
    <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">🧠 Habilidades técnicas</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "JavaScript/TypeScript",
        "React/Next.js",
        "Python/Django",
        "AWS/Docker",
        "SQL/NoSQL",
        "CI/CD Pipelines"
      ].map((tech, index) => (
        <li
          key={index}
          className="flex items-center bg-zinc-900 hover:bg-zinc-800 text-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
          <span>{tech}</span>
        </li>
      ))}
    </ul>
  </div>
</section>















<section
  id="experiencias"
  className="flex flex-col gap-10 bg-black text-white py-24 px-6 md:px-12"
>
  {/* Experiencia: Sol del Pacífico */}
  <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-6 rounded-xl border-l-4 border-amber-500 shadow-2xl hover:shadow-amber-600/30 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start md:items-center hover:scale-[1.02]">
    <img
      src={experiencia1}
      alt="Sol del Pacífico"
      className="w-32 h-32 object-contain rounded-md bg-white p-1 shadow-lg ring-2 ring-amber-500"
    />
    <div className="flex-1">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-2xl font-bold text-white">Sol del Pacífico</h3>
          <p className="text-amber-400 italic">Coordinador de TI</p>
        </div>
        <span className="text-sm text-gray-400 font-light">Mar 2021 - May 2022</span>
      </div>
      <ul className="list-disc list-inside text-gray-300 space-y-1 pl-1">
        <li>Supervisión de infraestructura tecnológica</li>
        <li>Implementación de medidas de ciberseguridad</li>
        <li>Gestión y mantenimiento de sistemas operativos</li>
      </ul>
    </div>
  </div>

  {/* Experiencia: Tracklog IT */}
  <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-6 rounded-xl border-l-4 border-amber-500 shadow-2xl hover:shadow-amber-600/30 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start md:items-center hover:scale-[1.02]">
    <img
      src={experiencia2}
      alt="Tracklog IT"
      className="w-32 h-32 object-contain rounded-md bg-white p-1 shadow-lg ring-2 ring-amber-500"
    />
    <div className="flex-1">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-2xl font-bold text-white">Tracklog IT</h3>
          <p className="text-amber-400 italic">Soporte de Equipos MDVR con IA</p>
        </div>
        <span className="text-sm text-gray-400 font-light">Jun 2022 - Presente</span>
      </div>
      <ul className="list-disc list-inside text-gray-300 space-y-1 pl-1">
        <li>Diagnóstico y mantenimiento de equipos de monitoreo</li>
        <li>Análisis predictivo de fallos con inteligencia artificial</li>
        <li>Integración con sistemas de gestión de flotas</li>
      </ul>
    </div>
  </div>
</section>





    
<section id="services" class="services-section">
  <div class="services-container">
    <h2 class="services-title">🛠️ Servicios</h2>

    <div class="services-grid">

      <div class="service-card border-purple">
        <div class="icon purple">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 class="service-title">Desarrollo Web</h3>
        <p class="service-description">
          Creación de sitios web y aplicaciones modernas con React, Next.js y arquitectura escalable.
        </p>
      </div>

      <div class="service-card border-blue">
        <div class="icon blue">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </div>
        <h3 class="service-title">Diseño UI/UX</h3>
        <p class="service-description">
          Diseño centrado en el usuario, wireframes interactivos y sistemas de diseño consistentes.
        </p>
      </div>

      <div class="service-card border-green">
        <div class="icon green">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 class="service-title">Optimización SEO</h3>
        <p class="service-description">
          Mejora de posicionamiento web con estrategias técnicas y análisis de rendimiento.
        </p>
      </div>

    </div>
  </div>
</section>

    




{/* Projects Section */}
<section id="projects" class="projects-section">
  <h2 class="projects-title">Proyectos</h2>
  <div class="projects-grid">

    <div class="project-card">
      <h3 class="project-title">🧰 Sistema Help Desk</h3>
      <p class="project-subtitle">Plataforma para registrar y dar seguimiento a incidencias de TI.</p>
      <ul class="project-list">
        <li>Desarrollado con Flask y PostgreSQL</li>
        <li>Dashboard intuitivo para técnicos y usuarios</li>
        <li>Soporte de notificaciones por correo</li>
      </ul>
      <button class="project-btn">Ver más detalles</button>
    </div>

    <div class="project-card">
      <h3 class="project-title">📍 Panel de Monitoreo Vehicular</h3>
      <p class="project-subtitle">Interfaz de seguimiento y análisis de flotas con IA.</p>
      <ul class="project-list">
        <li>Desarrollado en React + Node.js + MongoDB</li>
        <li>Vista en tiempo real con mapas y alertas</li>
        <li>Predicción de fallas mediante modelos ML</li>
      </ul>
      <button class="project-btn">Ver más detalles</button>
    </div>

    <div class="project-card">
      <h3 class="project-title">⚙️ Optimizador de Recursos TI</h3>
      <p class="project-subtitle">Aplicación para analizar el uso de recursos y proponer mejoras.</p>
      <ul class="project-list">
        <li>Hecho con Python, Dash y Pandas</li>
        <li>Visualización de métricas clave en tiempo real</li>
        <li>Recomendaciones automáticas basadas en datos</li>
      </ul>
      <button class="project-btn">Ver más detalles</button>
    </div>

  </div>
</section>






    
            {/* Contact Section */}
            <section id="contact" class="contact-section">
  <div class="contact-container">
    <h2 class="contact-title">📬 Contáctame</h2>

    <div class="contact-content">
      <div class="contact-info">
        <p class="contact-text">
          ¿Tienes una idea de proyecto o necesitas apoyo en el desarrollo tecnológico?<br />
          Estoy disponible para colaborar en soluciones eficientes y profesionales.
        </p>

        <div class="contact-item">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1..."></path>
          </svg>
          <span>carlosdraxler8@gmail.com</span>
        </div>

        <div class="contact-item">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14..."></path>
          </svg>
          <span>+51-963214880</span>
        </div>
      </div>

      <div class="contact-socials">
        <a href="#" class="social-icon github" aria-label="GitHub"></a>
        <a href="#" class="social-icon twitter" aria-label="Twitter"></a>
        <a href="#" class="social-icon linkedin" aria-label="LinkedIn"></a>
      </div>
    </div>

    <form class="contact-form" action="#" method="post">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" required placeholder="Tu nombre" />

      <label for="email">Correo electrónico</label>
      <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com" />

      <label for="message">Mensaje</label>
      <textarea id="message" name="message" rows="5" required placeholder="Escribe tu mensaje aquí..."></textarea>

      <button type="submit" class="form-btn">Enviar mensaje</button>
    </form>

    <div class="contact-footer">
      <p>© 2025 Universidad Continental</p>
    </div>
  </div>
</section>


          </main>
        </div>
  )
}


