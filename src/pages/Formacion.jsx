import React from "react";
import "../css/formacion.css";
import { FaSchool } from "react-icons/fa";
const Formacion = () => {
  return (
    <div className="formacion__container page">
      <h1 className="formacion__titulo">Formación Académica</h1>
      <div className="formacion__card">
        <h2 className="formacion__subtitulo">
          Educación Secundaria <FaSchool color="gray" size={20} />
        </h2>
        <p>
          Cursé mis estudios secundarios en el{" "}
          <b>Politécnico Superior General San Martin</b> de Rosario, en el cual
          me recibí de <b>Técnico en Informática Profesional y Personal</b>
        </p>
      </div>
      <div className="formacion__card">
        <h2 className="formacion__subtitulo">
          Estudios Superiores <FaSchool color="gray" size={20} />
        </h2>
        <p>
          Estoy cursando la carrera de{" "}
          <b>Licenciado en Ciencias de la Computación</b> en la{" "}
          <b>Universidad Nacional de Rosario</b>
        </p>
      </div>
    </div>
  );
};

export default Formacion;
