import imagen2 from "../../assets/img2_segunda_oportunidad.png";

export const SectionHeader = () => {
   return (
      <div className="hero__text container_grid">
         <img
            className="imagen_estilo  float-end"
            src={imagen2}
            alt="Simpre hay una segunda Oportunidad"
         />
      </div>
   );
};
