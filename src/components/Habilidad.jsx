import React from "react";

const Habilidad = ({ imageName }) => {
  return (
    <div className="habilidad-container">
      <img
        className="habilidad-logo"
        src={`/habilidades/${imageName}.png`}
        alt=""
      />
    </div>
  );
};

export default Habilidad;
