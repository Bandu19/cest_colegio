// import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../../css/index.css";
import imgLogo from "../../assets/cest_superior_izquierdo.png";

import { MobileIcon, Menu, MenuItem } from "../../colegio/data/Navbar.elements";
import {
   FaBars,
   FaBalanceScale,
   FaUserTie,
   FaCubes,
   FaHome,
   FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export const Navbar = () => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);

   return (
      <div className="container ">
         <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            <nav
               className="
               row text-white 
               justify-content-between 
               align-items-center text-uppercase "
            >
               {/* LOGO */}
               <a href="#" className="col-auto">
                  <img src={imgLogo} alt="Logo CEST" className="img-logo" />
               </a>

               {/* ANCLAS */}

               <div className="col-auto ">
                  <Menu open={showMobileMenu}>
                     <a href="#" className="icono_portada justify-content-center">
                        <img src={imgLogo} alt="Logo CEST" className="img-logo_mb" />
                     </a>

                     <MenuItem>
                        <a
                           className="text-reset nav_items items-cta row fuente_letrra  "
                           href="#"
                           /* PARA CERRAR LOS ENLACES */
                           onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                           <div className="icono_link ">
                              <FaBalanceScale />
                              ¿Quienes Somos?
                           </div>
                        </a>
                     </MenuItem>
                     <MenuItem>
                        <a
                           className="text-reset nav_items items-cta row fuente_letrra "
                           href="#"
                           /* PARA CERRAR LOS ENLACES */
                           onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                           <div className="icono_link2 ">
                              <FaUserTie />
                              ¿Te interesa ?
                           </div>
                        </a>
                     </MenuItem>
                     <MenuItem>
                        <a
                           className="text-reset nav_items items-cta row fuente_letrra "
                           href="#"
                           /* PARA CERRAR LOS ENLACES */
                           onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                           <div className="icono_link ">
                              <FaCubes />
                              Oferta Academica
                           </div>
                        </a>
                     </MenuItem>
                     <MenuItem>
                        <a
                           className="text-reset nav_items items-cta row fuente_letrra "
                           href="#"
                           /* PARA CERRAR LOS ENLACES */
                           onClick={() => setShowMobileMenu(!showMobileMenu)}
                        >
                           <div className="icono_link ">
                              <FaHome />
                              Iniciar Sesión
                           </div>
                        </a>
                     </MenuItem>
                  </Menu>
               </div>

               <MobileIcon
                  className="justify-content-center"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
               >
                  {showMobileMenu ? <FaTimes /> : <FaBars />}
               </MobileIcon>
            </nav>
         </IconContext.Provider>
      </div>
   );
};
