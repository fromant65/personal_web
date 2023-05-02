import React from "react";
import "../css/inicio.css";
import Logo from "../components/Logo";
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

      <div className="inicio__lista__container">
        <ul className="inicio__lista">
          <li>HTML, CSS, Javascript</li>
          <li>MERN Stack (MongoDB, ExpressJS, React, Node.js)</li>
          <li>MySQL Databases</li>
          <li>Git & Github</li>
          <li>Rest APIs</li>
          <li>Firebase</li>
          <li>Next.js</li>
          <li>Técnico en Informática Profesional y Personal (IPS, Rosario)</li>
          <li>Estudiando LCC en la UNR</li>
        </ul>
      </div>
    </div>
  );
};

export default Inicio;
