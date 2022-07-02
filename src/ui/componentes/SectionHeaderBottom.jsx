import {
   FaBars,
   FaBalanceScale,
   FaUserTie,
   FaCubes,
   FaHome,
   FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
export const SectionHeaderBottom = () => {
   return (
      <div className="container_section_mb">
         <div className="container_grid_main text-uppercase text-white">
            <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
               <div className="prubea2">
                  <FaCubes />
                  <a className="text-reset nav__link col-auto" href="#">
                     ¿Quiénes Somos?
                  </a>
               </div>

               <div className="prubea2">
                  <FaCubes />
                  <a className="text-reset nav__link col-auto" href="#">
                     Oferta Académica
                  </a>
               </div>

               <div className="prubea2">
                  <FaCubes />
                  <a className="text-reset nav__link col-auto" href="#">
                     Tramites y Servicios
                  </a>
               </div>

               <div className="prubea2">
                  <FaCubes />
                  <a className="text-reset nav__link col-auto" href="">
                     Control Escolar
                  </a>
               </div>
            </IconContext.Provider>
         </div>
      </div>
   );
};
