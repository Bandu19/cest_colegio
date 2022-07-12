import { Route, Routes } from "react-router-dom";
import { NotFound404 } from "../../auth";
import { Navbar, SectionHeader, Footer } from "../../ui";
import { Contenido, Formulario } from "../pages";

//--- RAMA HIJO
export const CestMain = () => {
   return (
      <>
         <header className="header">
            <div className="content_ani nav_mod">
               <Navbar />
            </div>

            <section className="hero_container container">
               <SectionHeader />
            </section>
         </header>

         <Routes>
            <Route exact path="/inicio" element={<Contenido />} />
            <Route exact path="/formulario" element={<Formulario />} />

            <Route path="*" element={<NotFound404 />} />
         </Routes>

         <footer className="bg-dark text-white">
            <Footer />
         </footer>
      </>
   );
};
