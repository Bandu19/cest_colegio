import { Navbar } from "../../ui";

//--- RAMA HIJO
export const CestMain = () => {
   return (
      <>
         <header className="header">
            {/* CONTAINER PADRE */}
            <div className="content_ani nav_mod ">
               <Navbar />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-6">
                     {/* Title */}
                     <img
                        className="imagen_estilo"
                        src="../../../assets/SIEMPRE HAY UNA SEGUNDA.... FRASE.png"
                        alt="imagen logo"
                     />
                     {/* Description */}
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};
