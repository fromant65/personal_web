import React from "react";
import "../css/habilidades.css";
import Habilidad from "../components/Habilidad";
const Habilidades = () => {
  return (
    <div className="habilidades__container page">
      <Habilidad imageName="HTML" />
      <Habilidad imageName="CSS" />
      <Habilidad imageName="Javascript" />
      <Habilidad imageName="python" />
      <Habilidad imageName="MERN" />
      <Habilidad imageName="Git" />
      <Habilidad imageName="Github" />
      <Habilidad imageName="SQL" />
      <Habilidad imageName="nextjs" />
      <Habilidad imageName="Firebase" />
    </div>
  );
};

export default Habilidades;
