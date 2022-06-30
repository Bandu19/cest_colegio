// import { Link, NavLink } from "react-router-dom";
import "../../css/index.css";
import imgLogo from "../../assets/cest_superior_izquierdo.png";

export const Navbar = () => {
   return (
      <div className="container ">
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

            <div className="col-auto">
               <a className="text-reset nav_items  items-cta " href="#">
                  ¿Quienes Somos?
               </a>
               <a className="text-reset nav_items  items-cta" href="#">
                  Iniciar Sesión
               </a>
            </div>
         </nav>
      </div>
   );
};
