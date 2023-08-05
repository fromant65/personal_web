import React from "react";
import "../css/info.css";
import Reconocimientos from "../components/Reconocimientos";
import Idiomas from "../components/Idiomas";
import Contacto from "./Contacto";
const Info = () => {
  return (
    <div className="info__container page">
      <Reconocimientos />
      <Idiomas />
      <Contacto />
    </div>
  );
};

export default Info;
