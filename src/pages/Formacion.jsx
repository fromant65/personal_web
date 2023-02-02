import React from "react";
import "../css/formacion.css";

const Formacion = () => {
  return (
    <div className="formacion__container">
      <h1 className="formacion__titulo">Formación Académica</h1>
      <h2 className="formacion__subtitulo">Educación Secundaria</h2>
      <p>
        Cursé mis estudios secundarios en el{" "}
        <b>Politécnico Superior General San Martin</b> de Rosario, en el cual me
        recibí de <b>Técnico en Informática Profesional y Personal</b>
      </p>
      <h2 className="formacion__subtitulo">Estudios Superiores</h2>
      <p>
        Estoy cursando la carrera de{" "}
        <b>Licenciado en Ciencias de la Computación</b> en la{" "}
        <b>Universidad Nacional de Rosario</b>
      </p>
    </div>
  );
};

export default Formacion;
