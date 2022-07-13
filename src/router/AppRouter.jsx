import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { CestMain } from "../colegio";

export const AppRouter = () => {
   return (
      //FRAGMENT
      <>
         <Routes>
            <Route path="login" element={<LoginPage />} />
            {/* Cualquier Ruta que no sea login pase por esta ruta*/}
            <Route path="/*" element={<CestMain />} />
         </Routes>
      </>
   );
};
