import imgLogoFooter from "../../assets/cest_superior_izquierdo.png";

export const Footer = () => {
   return (
      <div className="container">
         <div className="grupo-1 container_grid_footer_mb ">
            <div className="flex_grap">
               {/* LOGO */}
               <a
                  href="#"
                  className="col-3 text-reset text-uppercase d-flex align-items-center"
               >
                  <img src={imgLogoFooter} alt="Logo CEST" className="img-logo-footer" />
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
   );
};
