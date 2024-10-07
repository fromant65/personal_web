import React, { useEffect } from "react";
import "./../css/proyectos.css";
import ProyectosPersonales from "../components/ProyectosPersonales";
import ProyectosProfesionales from "../components/ProyectosProfesionales";
// import proyectos from "../data/projects.json";
// La DB de projects.json servirá para la versión en inglés del Portfolio

const Proyectos = () => {
  return (
    <div className="proyectos__container page ">
      <ProyectosProfesionales />
      <ProyectosPersonales />
    </div>
  );
};

export default Proyectos;
