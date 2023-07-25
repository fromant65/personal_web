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

      {/*Cambiar esta lista por una descripción corta que resuma estos datos */}
      <div className="inicio__resumen">
        Soy un <b>Desarrollador Web Fullstack</b> con conocimientos de
        tecnologías como <b>HTML</b>, <b>CSS</b> y <b>Javascript</b>, además de{" "}
        <b>Git y Github</b>. El principal Stack con el que desarrollo es{" "}
        <b>MERN (MongoDB, ExpressJS, React, Node.js)</b>. También sé manejar
        bases de datos estructuradas <b>(SQL)</b>. Me especializo en el
        desarrollo de <b>Rest APIs</b>. Otras herramientas que conozco son{" "}
        <b>Firebase</b> y <b>Next.js</b>. Soy{" "}
        <b>Técnico en Informática Profesional y Personal</b> del IPS, Rosario.
        Estoy cursando <b>Ciencias de la Computación</b> en la Universidad
        Nacional de Rosario.
      </div>
    </div>
  );
};

export default Inicio;
