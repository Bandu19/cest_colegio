import { FaSchool, FaCubes } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IconContext } from "react-icons";

export const SectionHeaderBottom = () => {
   return (
      <div className="container_section_mb">
         <div className="container_grid_main text-uppercase text-white">
            <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
               <div className="prubea2">
                  <RiQuestionnaireFill />
                  <a className="text-reset nav__link col-auto" href="#">
                     ¿Quiénes Somos?
                  </a>
               </div>

               <div className="prubea2">
                  <HiAcademicCap />
                  <a className="text-reset nav__link col-auto" href="#">
                     Oferta Académica
                  </a>
               </div>

               <div className="prubea2">
                  <BsFillFolderSymlinkFill />
                  <a className="text-reset nav__link col-auto" href="#">
                     Tramites y Servicios
                  </a>
               </div>

               <div className="prubea2">
                  <FaSchool />
                  <a className="text-reset nav__link col-auto" href="">
                     Control Escolar
                  </a>
               </div>
            </IconContext.Provider>
         </div>
      </div>
   );
};
