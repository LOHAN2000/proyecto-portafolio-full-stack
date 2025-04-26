import React from 'react'
import './anjhelo.css'
import perfilYo from './img/perfil-yo.jpg'
import gym from './img/projects/gym-react-project-anjhelo.png'
import mern from './img/projects/mern-store-project-anjhelo.png'
import twitter from './img/projects/twitter-project-anjhelo.png'

export const Anjhelo = () => {
  return (
<div className='anjhelo__container'>
  <div className="anjhelo__custom-container">
      <section id="hero" className="anjhelo__hero">
              <div className="anjhelo__container">
                  <div className="anjhelo__d-grid anjhelo__hero__wrapper">
                      <div className="anjhelo__hero__content">
                          <h1 className="anjhelo__hero__title text-md">Hola, soy Anjhelo Elvis Vela Yauri,<br/>Web Developer.</h1>
                          <p className="anjhelo__hero__description">Hola mi nombre es Anjhelo Elvis Vela Yauri, soy desarrollador FullStack. Soy un apasionado por las nuevas tecnologias y los diseños Interactivos.</p>
                          <div className="anjhelo__hero__info">
                              <div className="anjhelo__hero__info-wrapper">
                                  <p className="anjhelo__hero__info-number">02</p>
                                  <h2 className="anjhelo__hero__info-title">Años<br/>Experiencia</h2>
                              </div>
                              <div className="anjhelo__hero__info-wrapper">
                                  <p className="anjhelo__hero__info-number">20+</p>
                                  <h2 className="anjhelo__hero__info-title">Proyectos<br/>Terminados</h2>
                              </div>
                          </div>
                      </div>
                      <img src={perfilYo} alt="Anjhelo" className="anjhelo__hero__img"/>
                  </div>
              </div>
          </section>
          <section id="about" className="anjhelo__section anjhelo__about" style={{width: "70%"}}>
              <div className="anjhelo__container">
                  <div className="anjhelo__section__header" >
                      <h2 className="anjhelo__section__title">Sobre mi</h2>
                      <span className="anjhelo__section__subtitle">Quien Soy</span>
                  </div>
                  <div className="anjhelo__d-grid anjhelo__about__wrapper">
                      <div className="anjhelo__about__content">
                          <h3 className="anjhelo__about__title">Soy un Desarrollador Experimentado Full Stack</h3>
                          <p className="anjhelo__about__description">Hola! Soy Anjhelo Vela un desarrollador Full-Stack apasionado por aprender nuevas tecnologias</p>
                          <a href="https://www.linkedin.com/in/anjhelo-vela" className="anjhelo__btn anjhelo__btn--primary">Conoceme</a>
                      </div>
                      <div className="anjhelo__skills">
                          <h3 className="anjhelo__skills__title">Tecnologías:</h3>
                          <div className="anjhelo__skills__wrapper">
                              <div className="anjhelo__skills__content">
                                  <h4 className="anjhelo__skills__subtitle">Backend</h4>
                                  <ul className="anjhelo__skills__list">
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>Node.js</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>Python</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>Java</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>MongoDB</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>MySQL</li>
                                  </ul>
                              </div>
                              <div className="anjhelo__skills__content">
                                  <h4 className="anjhelo__skills__subtitle">Frontend</h4>
                                  <ul className="anjhelo__skills__list">
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>React</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>Typescript</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>JavaScript</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>Tailwind</li>
                                      <li className="anjhelo__skills__item"><i className="anjhelo__ri-arrow-right-s-fill"></i>Next.js</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="qualification" className="anjhelo__section anjhelo__qualification anjhelo">
              <div className="anjhelo__container">
                  <div className="anjhelo__section__header">
                      <h2 className="anjhelo__section__title">Educación</h2>
                      <span className="anjhelo__section__subtitle">Educación</span>
                  </div>
                  <div className="anjhelo__qualification__wrapper">
                      <h3 className="anjhelo__qualification__name">
                          <i className="anjhelo__ri-booklet-fill"></i>
                          Education
                      </h3>
                      <div className="anjhelo__d-grid-education anjhelo__qualification__content">
                          <div className="anjhelo__d-grid-education anjhelo__qualification__content">
                              <div className="anjhelo__qualification__item">
                                  <h3 className="anjhelo__qualification__title">4Geeks Bootcamp</h3>
                                  <p className="anjhelo__qualification__description">
                                      Completé un bootcamp intensivo en el que fortalecí mis habilidades en desarrollo full-stack, trabajando con tecnologías modernas como React, Node.js y Express. Además, aprendí principios de diseño para crear interfaces web bonitas e intuitivas.
                                  </p>
                                  <span className="anjhelo__qualification__date">2024 - 2025</span>
                              </div>
                              <div className="anjhelo__qualification__item">
                                  <h3 className="anjhelo__qualification__title">Universidad Continental</h3>
                                  <p className="anjhelo__qualification__description">
                                      Actualmente curso la carrera de Ingeniería de Sistemas e Informática, donde adquiero una sólida base teórica y práctica en el desarrollo de software, consolidando mis conocimientos en tecnologías web y metodologías ágiles.
                                  </p>
                                  <span className="anjhelo__qualification__date">2020 - Present</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
              <section id="service" className="anjhelo__section anjhelo__service" style={{width: "70%"}}>
              <div className="anjhelo__container">
                  <div className="anjhelo__section__header">
                      <h2 className="anjhelo__section__title">Servicios</h2>
                      <span className="anjhelo__section__subtitle">¿Que hago?</span>
                  </div>
                  <div className="anjhelo__d-grid-education anjhelo__service__wrapper">
                      <div className="anjhelo__service__card">
                          <div className="anjhelo__service__icon">
                              <i className="anjhelo__ri-layout-4-fill"></i>
                          </div>
                          <h3 className="anjhelo__service__title">Frontend<br/>Development</h3>
                          <a href="https://github.com/LOHAN2000/App_Gym_React" className="anjhelo__service__link">Know More !</a>
                      </div>
                      <div className="anjhelo__service__card">
                          <div className="anjhelo__service__icon">
                              <i className="anjhelo__ri-code-s-slash-line"></i>
                          </div>
                          <h3 className="anjhelo__service__title">Backend<br/> Development</h3>
                          <a href="https://github.com/LOHAN2000/REST-API-NODE-MYSQL" className="anjhelo__service__link">Know More !</a>
                      </div>
                  </div>
              </div>
          </section>
              <section id="project" className="anjhelo__section anjhelo__project" style={{width: "70%", marginBottom: "30rem"}}>
              <div className="anjhelo__container">
                  <div className="anjhelo__section__header">
                      <h2 className="anjhelo__section__title">Proyectos</h2>
                      <span className="anjhelo__section__subtitle">Mis trabajos recientes</span>
                  </div>
                  <div className="anjhelo__d-grid-education anjhelo__project__wrapper">
                      <div className="anjhelo__project__content">
                          <img src={twitter} alt="" className="anjhelo__project__img_PR"/>
                          <h3 className="anjhelo__project__title">Twitter clone</h3>
                          <p className="anjhelo__project__description"> Copia de la pagina web twitter usando tecnologias como: React, MongoDB, express, etc.
                          </p>
                          <a href="https://twitter-clone-xiic.onrender.com" className="anjhelo__project__link">Demo
                              <i className="anjhelo__ri-arrow-right-line"></i></a>
                      </div>
                      <div className="anjhelo__project__content">
                          <img src={mern} alt="" className="anjhelo__project__img_PR"/>
                          <h3 className="anjhelo__project__title">Inventory App</h3>
                          <p className="anjhelo__project__description"> Aplicación que sirve para registrar productos en una base de datos usando MERN.
                          </p>
                          <a href="https://mern-app-inventory.onrender.com" className="anjhelo__project__link">Demo
                              <i className="anjhelo__ri-arrow-right-line"></i></a>
                      </div>
                      <div className="anjhelo__project__content">
                          <img src={gym} alt="" className="anjhelo__project__img_PR"/>
                          <h3 className="anjhelo__project__title">Gym React App</h3>
                          <p className="anjhelo__project__description"> Aplicacion que sirve para generar rutina para el gimnasio, utilizando React y Javascript.
                          </p>
                          <a href="https://gym-app-anjhelo.netlify.app" className="anjhelo__project__link">Demo
                              <i className="anjhelo__ri-arrow-right-line"></i></a>
                      </div>
                  </div>
              </div>
          </section>
  </div>
</div>
  )
}
