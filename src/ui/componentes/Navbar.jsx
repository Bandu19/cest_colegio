// import { Link, NavLink } from "react-router-dom";
import "../../css/index.css";
import imgLogo from "../../assets/cest_superior_izquierdo.png";
import { MobileIcon, Menu } from "../../colegio/data/Navbar.elements";
import { FaBars } from "react-icons/fa";

import { IconContext } from "react-icons";

export const Navbar = () => {
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
                  <Menu>
                     <a className="text-reset nav_items items-cta row  " href="#">
                        ¿Quienes Somos?
                     </a>
                     <a className="text-reset nav_items items-cta row " href="#">
                        Iniciar Sesión
                     </a>
                  </Menu>
               </div>
               <MobileIcon className="justify-content-center">
                  <FaBars />
               </MobileIcon>
            </nav>
         </IconContext.Provider>
      </div>
   );
};
