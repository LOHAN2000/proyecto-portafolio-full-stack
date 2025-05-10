import React from 'react'
import carlos from './img/carlos-perfil.jpeg'
import experiencia1 from './img/sol-del-pacifico.jpeg'
import experiencia2 from './img/tracklog-it.jpeg'

import ciberseguridad from './img/Ciberseguridad.jpg';
import trabajoEnEquipo from './img/trabajoEnEquipo.jpg';
export const Carlos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zinc-900 to-black font-sans text-white">
      <main className="pt-24 w-full max-w-7xl mx-auto flex-1 space-y-20 px-6 md:px-12">


        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-10 py-24 animate-fade-in">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              ¡Hola, soy Carlos Yudiño!
            </h1>
            <p className="text-lg text-gray-300">
              🚀 Full Stack Dev & Diseño | Código ➜ UX intuitiva potenciada con IA
            </p>
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:scale-105">
              📄 Descargar CV
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 transform-gpu perspective-1000 group">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 transition-transform duration-500 group-hover:rotate-y-6" />
              <img
                src={carlos}
                alt="Carlos Yudiño"
                className="rounded-full w-64 h-64 object-cover shadow-xl border-4 border-amber-500 hover:scale-110 transition-transform duration-500 animate-pulse relative z-10"
              />
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="bg-black text-gray-200 py-20">
          <h2 className="text-4xl font-extrabold text-amber-500 mb-10 border-b-4 border-amber-500 inline-block pb-2">
            🧑‍💻 Sobre mí
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-10">
            Soy un <span className="text-amber-500 font-semibold">ingeniero full-stack peruano</span> especializado en <span className="text-amber-500 font-semibold">arquitecturas escalables</span>. Trabajo con tecnologías como <span className="text-green-400">JavaScript/TypeScript</span>, <span className="text-green-400">Python</span>, y bases de datos <span className="text-green-400">SQL/NoSQL</span>. Aplico principios de <span className="text-pink-400">inteligencia artificial 🤖</span> para simplificar sistemas complejos.
          </p>
          <div className="space-y-6">
            <p className="flex items-start">
              <span className="text-amber-500 text-2xl mr-4">🔧</span>
              <span><strong className="text-white">DevOps:</strong> Automatizo entornos con Docker y AWS para escalabilidad real.</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-500 text-2xl mr-4">🌟</span>
              <span><strong className="text-white">Innovación:</strong> Código con ADN peruano: precisión andina y creatividad sin límites.</span>
            </p>
            <p className="flex items-start">
              <span className="text-amber-500 text-2xl mr-4">🎯</span>
              <span><strong className="text-white">Meta:</strong> Que cada sistema sea un puente entre tecnología y propósito humano.</span>
            </p>
          </div>
        </section>

        <style jsx>{`
  @keyframes wobble {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    50% { transform: rotate(-2deg); }
    75% { transform: rotate(1deg); }
  }

  @keyframes pulseLight {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 rgba(0, 255, 0, 0); }
    50% { opacity: 0.6; box-shadow: 0 0 10px rgba(34, 197, 94, 0.8); }
  }

  .hover-wobble:hover {
    animation: wobble 0.5s ease-in-out;
  }

  .hover-pulse:hover .dot {
    animation: pulseLight 1s infinite;
  }
`}</style>

<div className="mt-12">
  <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-600 pb-2">
    🧠 Habilidades técnicas
  </h3>
  <div className="space-y-6">
    {[
      { title: "Frontend", skills: ["JavaScript / TypeScript", "React / Next.js"] },
      { title: "Backend", skills: ["Python / Django", "SQL / NoSQL"] },
      { title: "DevOps", skills: ["AWS / Docker", "CI/CD Pipelines"] },
    ].map((category, idx) => (
      <div key={idx}>
        <h4 className="text-lg font-medium text-gray-300 mb-2">{category.title}</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.skills.map((skill, index) => (
            <li
              key={index}
              className="hover-wobble hover-pulse flex items-center bg-zinc-900 hover:bg-zinc-800 text-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`Habilidad: ${skill}`}
              title={`Tecnología: ${skill}`}
            >
              <span className="dot inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>








        {/* Experiencias */}
        <section id="experiencias" className="flex flex-col gap-10 text-white py-24">
          {[
            {
              empresa: "Sol del Pacífico",
              cargo: "Coordinador de TI",
              fecha: "Mar 2021 - May 2022",
              img: experiencia1,
              actividades: [
                "Supervisión de infraestructura tecnológica",
                "Implementación de medidas de ciberseguridad",
                "Gestión y mantenimiento de sistemas operativos"
              ]
            },
            {
              empresa: "Tracklog IT",
              cargo: "Soporte de Equipos MDVR con IA",
              fecha: "Jun 2022 - Presente",
              img: experiencia2,
              actividades: [
                "Diagnóstico y mantenimiento de equipos de monitoreo",
                "Análisis predictivo de fallos con inteligencia artificial",
                "Integración con sistemas de gestión de flotas"
              ]
            }
          ].map((exp, i) => (
            <div
              key={i}
              className="backdrop-blur-lg bg-white/10 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-amber-600/30 transition-transform duration-300 hover:scale-[1.03] flex flex-col md:flex-row gap-6"
            >
              <img
                src={exp.img}
                alt={exp.empresa}
                className="w-32 h-32 object-contain rounded-md bg-white p-1 shadow-lg ring-2 ring-amber-500"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.empresa}</h3>
                    <p className="text-amber-400 italic">{exp.cargo}</p>
                  </div>
                  <span className="text-sm text-gray-400 font-light">{exp.fecha}</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.actividades.map((act, j) => <li key={j}>{act}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>


{/* Gallery Section */}
<section id="gallery" className="py-16">
  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                  bg-clip-text text-transparent mb-12 animate-gradient-x">
    Galería de Images
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Imagen: Trabajo en equipo */}
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={trabajoEnEquipo}
        alt="Trabajo en equipo"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white text-xl font-semibold">Trabajo en equipo</h3>
      </div>
    </div>

    {/* Imagen: Ciberseguridad */}
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={ciberseguridad}
        alt="Ciberseguridad"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white text-xl font-semibold">Ciberseguridad</h3>
      </div>
    </div>
  </div>
</section>




        {/* Servicios */}
        <section id="services" className="py-20 text-white bg-black">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">🛠️ Servicios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo Web",
                color: "border-purple-500",
                desc: "Creación de sitios web y aplicaciones modernas con React, Next.js y arquitectura escalable."
              },
              {
                title: "Diseño UI/UX",
                color: "border-blue-500",
                desc: "Diseño centrado en el usuario, wireframes interactivos y sistemas de diseño consistentes."
              },
              {
                title: "Optimización SEO",
                color: "border-green-500",
                desc: "Mejora de posicionamiento web con estrategias técnicas y análisis de rendimiento."
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`border-l-4 ${service.color} p-6 bg-zinc-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="py-20 text-white bg-black">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "🧰 Sistema Help Desk",
                subtitle: "Plataforma para registrar y dar seguimiento a incidencias de TI.",
                items: [
                  "Desarrollado con Flask y PostgreSQL",
                  "Dashboard intuitivo para técnicos y usuarios",
                  "Soporte de notificaciones por correo"
                ]
              },
              {
                title: "📍 Panel de Monitoreo Vehicular",
                subtitle: "Interfaz de seguimiento y análisis de flotas con IA.",
                items: [
                  "Desarrollado en React + Node.js + MongoDB",
                  "Vista en tiempo real con mapas y alertas",
                  "Predicción de fallas mediante modelos ML"
                ]
              },
              {
                title: "⚙️ Optimizador de Recursos TI",
                subtitle: "Aplicación para analizar el uso de recursos y proponer mejoras.",
                items: [
                  "Hecho con Python, Dash y Pandas",
                  "Visualización de métricas clave en tiempo real",
                  "Recomendaciones automáticas basadas en datos"
                ]
              }
            ].map((project, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.subtitle}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {project.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
                <button className="relative group px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600 transition-all duration-300 hover:border-b-4 hover:border-amber-700">
                  Ver más detalles
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">📬 Contáctame</h2>
            <p className="text-center mb-8">
              ¿Tienes una idea de proyecto o necesitas apoyo en el desarrollo tecnológico? Estoy disponible para colaborar en soluciones eficientes y profesionales.
            </p>

            {/* Información de contacto */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300">📧 carlosdraxler8@gmail.com</p>
              <p className="text-lg text-gray-300">📱 +51-963214880</p>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center gap-6 mb-8">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                title="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                title="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5,2h9A5.507,5.507,0,0,1,22,7.5v9A5.507,5.507,0,0,1,16.5,22h-9A5.507,5.507,0,0,1,2,16.5v-9A5.507,5.507,0,0,1,7.5,2ZM12,7.5A4.5,4.5,0,1,0,16.5,12,4.5,4.5,0,0,0,12,7.5Zm5.75-1.5A1.25,1.25,0,1,0,19,7.25,1.25,1.25,0,0,0,17.75,6Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                title="TikTok"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 2.65a4 4 0 0 0 2.58 3.69 4.09 4.09 0 0 0 2.42.14v3.56a7.94 7.94 0 0 1-4.98-1.67V14a6 6 0 1 1-4-5.65v3.73a2.34 2.34 0 1 0 1.58 2.22V2.65h2.4z"/>
                </svg>
              </a>

              {/* Kick */}
              <a
                href="https://kick.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                title="Kick"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 3h5v18H4zM10 9h5l-4 6 4 6h-5l-4-6zM17 3h4v18h-4z"/>
                </svg>
              </a>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Correo electrónico</label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Mensaje</label>
                <textarea
                  className="w-full p-3 rounded bg-zinc-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-amber-500 text-black px-6 py-3 rounded hover:bg-amber-600 transition font-semibold shadow-md hover:shadow-amber-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 text-center">
        <p className="text-gray-400">© 2025 Universidad Continental</p>
      </footer>
    </div>
  )
}
