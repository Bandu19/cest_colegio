import { Navigate, Route, Routes } from "react-router";
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
            <Route path="inicio" element={<Contenido />} />
            <Route path="formulario" element={<Formulario />} />

            <Route path="/" element={<Navigate to="/inicio" />} />
         </Routes>

         <footer className="bg-dark text-white">
            <Footer />
         </footer>
      </>
   );
};
