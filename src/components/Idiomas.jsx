import React from "react";

const Idiomas = () => {
  return (
    <div className="info__idiomas">
      <h2>Idiomas</h2>
      <div>
        <div id="idiomas-esp">
          <p>
            <img className="info-idioma-flag" src="argentina.png" alt="" />{"  "}
            Español: Nativo
          </p>
        </div>
        <div id="idiomas-eng">
          <p>
            <img className="info-idioma-flag" src="eeuu.png" alt="eeuu" />{" "}
            Ingles:
          </p>
          <div>
            <b>Listening:</b> Avanzado
          </div>
          <div>
            <b>Writing:</b> Intermedio
          </div>
          <div>
            <b>Reading:</b> Avanzado
          </div>
          <div>
            <b>Speaking:</b> Intermedio
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idiomas;
