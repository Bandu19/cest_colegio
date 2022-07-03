import { SectionHeaderBottom } from "../../ui";
//IMPORTACION IMAGENES
import imagen1 from "../../assets/fotografia_principal.png";
export const Contenido = () => {
   return (
      <>
         <section className="nav_mod_v1 mb-4">
            <div className=" container-md container ">
               <SectionHeaderBottom />
            </div>
         </section>

         <main className="container ">
            <div className="row imagen_estilo2 ">
               <img className="imagen_estilo col-lg-4  " src={imagen1} alt="maestro_1" />
               <img className="imagen_estilo col-lg-4 " src={imagen1} alt="maestro_2" />
               <img className="imagen_estilo col-lg-4 " src={imagen1} alt="maestro_3" />
            </div>

            <div className="row">
               <div className="col-12 mt-4 text-center text-lg-center">
                  <h2>Requisitos de Inscripcion</h2>
                  <div className="color text-white p-3 mt-4 mb-4">
                     <h2>Inscripción Gratis</h2>
                  </div>
                  <div className="row mb-4 imagen_estilo3 prueba ">
                     <img
                        className="imagen_estilo  col-lg-3 "
                        src={imagen1}
                        alt="imagen_muestra"
                     />
                     <img
                        className="imagen_estilo col-lg-3 "
                        src={imagen1}
                        alt="imagen_muestra"
                     />
                     <img
                        className="imagen_estilo col-lg-3   "
                        src={imagen1}
                        alt="imagen_muestra"
                     />
                     <img
                        className="imagen_estilo col-lg-3  "
                        src={imagen1}
                        alt="imagen_muestra"
                     />
                  </div>
               </div>
            </div>

            <div className="row imagen_estilo3 centrar-texto ">
               <div className="col-lg-4 uPpercase">
                  <h2>cest</h2>
                  <p>
                     Somos una institución educativa de Nivel Medio Superior y Superior,
                     formadora de profesionistas con un enfoque humanista que serán la
                     fuerza laboral del mañana.
                  </p>
               </div>
               <div className="col-lg-4 uPpercase">
                  <h2>misión</h2>
                  <p>
                     Formar profesionistas a partir de una educación de calidad centrada en
                     el desarrollo profesional y humano, que permita a nuestros egresados
                     generar las ideas que se requieren para el desarrollo social, local y
                     de nuestro pais.
                  </p>
               </div>
               <div className="col-lg-4 uPpercase">
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
      </>
   );
};
