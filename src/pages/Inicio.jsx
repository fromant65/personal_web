import React from "react";
import "../css/inicio.css";

const Inicio = () => {
  return (
    <div className="inicio__container">
      <div className="inicio__titulo__container">
        <div>
          <h1 className="inicio__titulo">Hola, soy Fulvio Todone</h1>
          <h3 className="inicio__subtitulo">Desarrollador Web Fullstack</h3>
        </div>
        <div className="inicio__foto__container">
          <img src="foto.jpg" alt="foto" className="inicio__foto" />
        </div>
      </div>

      <div className="inicio__lista__container">
        <ul className="inicio__lista">
          <li>HTML, CSS, Javascript</li>
          <li>MERN Stack (MongoDB, ExpressJS, React, Node.js)</li>
          <li>Git & Github</li>
          <li>Rest APIs</li>
          <li>Técnico en Informática Profesional y Personal (IPS, Rosario)</li>
          <li>Estudiando LCC en la UNR</li>
        </ul>
      </div>
    </div>
  );
};

export default Inicio;
