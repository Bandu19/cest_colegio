import { Navbar } from "../../ui";

//--- RAMA HIJO
export const CestMain = () => {
   return (
      <>
         <header className="header">
            <div className="content_ani nav_mod">
               <Navbar />
            </div>

            <section className="hero_container container">
               <div className="hero__text container_grid">
                  <img
                     className="imagen_estilo  float-end"
                     src="../../../assets/SIEMPRE HAY UNA SEGUNDA.... FRASE.png"
                     alt="Simpre hay una segunda Oportunidad"
                  />
               </div>
            </section>
         </header>

         <section className="nav_mod_v1 mb-4">
            <div className="container">
               <div
                  className="row text-white relleno
                  justify-content-between 
                  align-items-center text-uppercase "
               >
                  <a className="text-reset nav__link col-auto" href="#">
                     ¿Quiénes Somos?
                  </a>
                  <a className="text-reset nav__link col-auto" href="#">
                     Oferta Académica
                  </a>
                  <a className="text-reset nav__link col-auto" href="#">
                     Tramites y Servicios
                  </a>
                  <a className="text-reset nav__link col-auto" href="">
                     Control Escolar
                  </a>
               </div>
            </div>
         </section>

         <main className="container ">
            <div className=" row">
               <img
                  className="imagen_estilo col-lg-4 "
                  src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                  alt=""
               />
               <img
                  className="imagen_estilo col-lg-4   "
                  src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                  alt=""
               />
               <img
                  className="imagen_estilo col-lg-4   "
                  src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                  alt=""
               />
            </div>

            <div className="row">
               <div className="col-12 mt-4 text-lg-center">
                  <h2>Requisitos de Inscripcion</h2>
                  <div className="color text-white p-3 mt-4 mb-4">
                     <h2>Inscripción Gratis</h2>
                  </div>
                  <div className="row mb-4 prueba ">
                     <img
                        className="imagen_estilo col "
                        src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                        alt=""
                     />
                     <img
                        className="imagen_estilo col "
                        src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                        alt=""
                     />
                     <img
                        className="imagen_estilo col   "
                        src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                        alt=""
                     />
                     <img
                        className="imagen_estilo col   "
                        src="../../../assets/FOTOGRAFIA PRINCIPAL.png"
                        alt=""
                     />
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-4 uPpercase">
                  <h2>cest</h2>
                  <p>
                     Somos una institución educativa de Nivel Medio Superior y Superior,
                     formadora de profesionistas con un enfoque humanista que serán la
                     fuerza laboral del mañana.
                  </p>
               </div>
               <div className="col-4 uPpercase">
                  <h2>misión</h2>
                  <p>
                     Formar profesionistas a partir de una educación de calidad centrada en
                     el desarrollo profesional y humano, que permita a nuestros egresados
                     generar las ideas que se requieren para el desarrollo social, local y
                     de nuestro pais.
                  </p>
               </div>
               <div className="col-4 uPpercase">
                  <h2>visión</h2>
                  <p>
                     Siendo una institución consolidada en Tenango del Valle y con
                     reconocimiento en el valle de Toluca y a su vez obteniendo un
                     crecimiento estructural y educativo ofreciendo a nuestros aspirantes
                     el acceso a una educación digna y de calidad
                  </p>
               </div>
            </div>
         </main>

         <footer className="bg-dark text-white">
            <div className="container">
               <div className="grupo-1">
                  <div>
                     {/* LOGO */}
                     <a
                        href="#"
                        className="col-3 text-reset text-uppercase d-flex align-items-center"
                     >
                        <img
                           src="../../../assets/CEST superior izquierdo.png"
                           alt="Logo CEST"
                           className="img-logo-footer"
                        />
                     </a>
                  </div>
                  <div>{/* Menu */}</div>
                  {/* Social networks */}
                  <ul className="list-unstyled">
                     <li className="font-weight-bold text-uppercase text-center py-2 fuente_letrra">
                        Redes Sociales
                     </li>
                     <li className="d-flex justify-content-around redes-sociales">
                        <a href="#" className="text-reset facebokk">
                           <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" className="text-reset whatsapp">
                           <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="#" className="text-reset twitterr">
                           <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" className="text-reset instagramm">
                           <i className="fa-brands fa-instagram"></i>
                        </a>
                     </li>
                  </ul>
                  <div className="grupo-2">
                     <small>
                        &copy;2022
                        <b> CEST</b>- Todos los Derechos Reservados.
                     </small>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};
