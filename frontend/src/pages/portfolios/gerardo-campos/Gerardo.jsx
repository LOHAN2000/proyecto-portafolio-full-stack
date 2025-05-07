import React from 'react';
import gerardo from './img/gerardo-perfil.jpeg';

export const Gerardo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black font-poppins">
      <main className="pt-24 container mx-auto flex-1 space-y-20 px-6 md:px-12">
        {/* Sección Inicio (Feature 1: fondo pulsante) */}
        <section
          id="home"
          className="relative flex flex-col md:flex-row items-center gap-10 py-16 overflow-hidden"
        >
          {/* Fondo degradado pulsante */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-600 to-black opacity-40 animate-pulse z-0" />

          <div className="relative z-10 flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Hola, Soy <span className="text-emerald-600">Gerardo Campos Velasquez</span>!
            </h1>

            <div className="space-y-4 text-lg text-gray-300">
              <p className="leading-relaxed">
                <span className="font-semibold text-emerald-600">
                  Especialista Senior en Infraestructura TI
                </span>{' '}
                con más de una década liderando transformaciones tecnológicas en el sector Retail.
              </p>

              <div className="space-y-3 border-l-4 border-emerald-600 pl-4">
                <p className="flex items-center gap-2">
                  <i className="ri-server-line ri-lg text-emerald-600"></i>
                  Experto en diseño e implementación de arquitecturas tecnológicas escalables
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-cloud-line ri-lg text-emerald-600"></i>
                  Liderazgo en proyectos de migración cloud y virtualización
                </p>
                <p className="flex items-center gap-2">
                  <i className="ri-shield-check-line ri-lg text-emerald-600"></i>
                  Implementación de estándares ITIL y marcos de ciberseguridad
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Data Centers',
                'Redes SD-WAN',
                'Azure/AWS',
                'CIS Controls',
                'SAP HANA',
                'ISO 27001',
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-sm bg-gray-800 px-3 py-2 rounded-full text-emerald-400"
                >
                  <i className="ri-checkbox-circle-line"></i>
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all">
                <i className="ri-file-download-line ri-lg"></i>
                Descargar CV
              </a>
              <a className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all">
                <i className="ri-chat-3-line ri-lg"></i>
                Contactar Ahora
              </a>
            </div>
          </div>

          <div className="relative z-10 flex-1 flex justify-center">
            <div className="relative">
              <img
                src={gerardo}
                alt="Gerardo Campos"
                className="rounded-full w-72 h-72 object-cover object-center shadow-2xl border-4 border-emerald-600 relative z-10"
              />
              <div className="absolute inset-0 bg-emerald-600 blur-2xl opacity-30 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </section>

        {/* Sección Sobre Mí */}
        <section id="about" className="py-16 border-t border-gray-800">
          <h2 className="text-4xl font-bold text-white mb-8">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Profesional con más de 10 años de experiencia en empresas líderes del sector Retail, desempeñando roles clave en el área de TI. Especializado en la Gestión de Servicios e Infraestructura Tecnológica, con enfoque en la implementación de soluciones alineadas a los objetivos de negocio.
              </p>
              <p className="leading-relaxed">
                Mi experiencia abarca desde la dirección técnica de proyectos multinacionales hasta la optimización de operaciones IT, siempre bajo los estándares internacionales como ITIL, COBIT y normas ISO.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'ITIL Certification',
                'Azure Architect',
                'CISSP',
                'PMI Methodology',
                'DevOps Practices',
                'Agile Leadership',
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-2 p-4 bg-gray-800 rounded-lg">
                  <i className="ri-medal-line text-emerald-600"></i>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section id="work" className="py-16 border-t border-gray-800">
          <h2 className="text-4xl font-bold text-white mb-8">Experiencia</h2>
          <div className="space-y-8">
            {[
              {
                company: 'Universidad Continentas',
                position: 'Ingenieria de Sistemas e Informatica',
                period: '2020 - present',
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-600 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-gray-400">{exp.position}</p>
                  </div>
                  <span className="text-sm text-emerald-400">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios (Feature 2: tilt + shadow en hover) */}
        <section id="services" className="py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Arquitectura Cloud',
                  icon: 'ri-cloud-line',
                  description: 'Diseño e implementación de infraestructuras cloud híbridas y multi-nube para entornos escalables',
                  color: 'text-blue-400',
                },
                {
                  title: 'Ciberseguridad',
                  icon: 'ri-shield-star-line',
                  description: 'Protección de activos tecnológicos bajo marcos NIST y CIS Controls',
                  color: 'text-purple-400',
                },
                {
                  title: 'Transformación Digital',
                  icon: 'ri-cpu-line',
                  description: 'Modernización de infraestructura legacy y adopción de tecnologías disruptivas',
                  color: 'text-emerald-400',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform transition-transform hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:border-emerald-600"
                >
                  <div className={`w-12 h-12 mb-6 ${service.color}`}>
                    <i className={`${service.icon} ri-3x`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12">Contáctame</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  ¿Listo para optimizar su infraestructura tecnológica?
                  <br />
                  Envíeme un mensaje y discutamos cómo puedo ayudar a su organización.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors">
                    <i className="ri-mail-line ri-lg"></i>
                    <span>43303380@continental.edu.pe</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-emerald-400 transition-colors">
                    <i className="ri-phone-line ri-lg"></i>
                    <span>+51 955751813</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 justify-start md:justify-end">
                <a className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <i className="ri-linkedin-box-fill ri-3x"></i>
                </a>
                <a className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <i className="ri-github-fill ri-3x"></i>
                </a>
                <a className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <i className="ri-twitter-x-fill ri-3x"></i>
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-500">
                © {new Date().getFullYear()} Gerardo Campos. Todos los derechos reservados
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};