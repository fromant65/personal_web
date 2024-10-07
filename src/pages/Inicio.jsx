import React from "react";
import "../css/inicio.css";
import Logo from "../components/Logo";
import LinksContacto from "../components/LinksContacto";
const Inicio = () => {
  return (
    <div className="inicio__container page">
      <div className="inicio__titulo__container">
        <div className="inicio__info">
          <h1 className="inicio__titulo">Hola, soy Fulvio Todone</h1>
          <h3 className="inicio__subtitulo">Desarrollador Web Fullstack</h3>
        </div>
        <div className="inicio__logo__container">
          <Logo className="inicio__logo"></Logo>
        </div>
      </div>

      {/*Cambiar esta lista por una descripción corta que resuma estos datos */}
      <div className="inicio__resumen">
        <p>
          Soy <b>Desarrollador Web</b> y me encanta resolver problemas complejos 
          con soluciones creativas. Mis más de <b>5 años de experiencia</b> en el 
          desarrollo y <b>reconocimientos académicos</b>, además de mis estudios formales 
          en <b>Ciencias de la Computación</b> me permiten desenvolverme con 
          confianza en los proyectos que resuelvo.
        </p>
        <p>
          Me especializo en el <b>desarrollo Backend</b> con herramientas como
          el <b>Stack T3</b> con <b>SQL</b>, aunque también manejo bases de datos
          No SQL como <b>MongoDB</b> o <b>Firebase</b>
        </p>
        <p>
          Para resolver cuestiones de Frontend utilizo principalmente <b>React</b>,{" "} 
          <b>Next JS</b> y <b>Tailwind CSS</b>
        </p>
        <LinksContacto />
      </div>
    </div>
  );
};

export default Inicio;
