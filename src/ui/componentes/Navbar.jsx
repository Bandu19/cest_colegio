// import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../../css/index.css";
import { MobileIcon, Menu, MenuItem } from "../../colegio/data/Navbar.elements";

import imgLogo from "../../assets/cest_superior_izquierdo.png";
import icono_2 from "../../assets/menu.svg";

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
            <nav className="nav_1  ">
               {/* LOGO */}
               <div className="img-logo">
                  <img src={imgLogo} alt="" />
               </div>
               {/* ANCLAS */}

               <Menu open={showMobileMenu}>
                  <a href="#" className="icono_portada">
                     <img src={imgLogo} alt="Logo CEST" className="img-logo_mb" />
                  </a>

                  <MenuItem>
                     <div className="content_width ">
                        <a href="/formulario" className="nav__links text-reset ">
                           <div className="icono_link nav_items items-cta">
                              <FaBalanceScale />
                              Formulario
                           </div>
                        </a>
                     </div>
                  </MenuItem>
                  <MenuItem>
                     <div className="content_width2">
                        <a href="#" className="nav__links">
                           <div className="icono_link2 nav_items items-cta">
                              <FaUserTie />
                              ¿Te interesa?
                           </div>
                        </a>
                     </div>
                  </MenuItem>
                  <MenuItem>
                     <div className="content_width">
                        <a href="#" className="nav__links">
                           <div className="icono_link nav_items items-cta">
                              <FaCubes />
                              Oferta Academica
                           </div>
                        </a>
                     </div>
                  </MenuItem>
                  <MenuItem>
                     <a href="#" className="nav__links">
                        <div className="icono_link nav_items items-cta">
                           <FaHome />
                           Iniciar Sesión
                        </div>
                     </a>
                  </MenuItem>
               </Menu>

               <div
                  className="nav__menu"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
               >
                  <img src={icono_2} className="nav__img" />
               </div>
            </nav>
         </IconContext.Provider>
      </div>
   );
};
