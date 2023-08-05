import React from "react";

const Reconocimientos = () => {
  return (
    <div className="info__reconocimientos">
      <h2>Reconocimientos</h2>
      <div className="info__reconocimientos__lista">
        <div className="info__reconocimiento">
          <img className="info-logo" src="oma.jpg" alt="" />
          <p>
            Subcampeón del segundo nivel de la{" "}
            <b>Olimpiada Matemática Santafesina</b>. 25/07/2017
          </p>
        </div>
        <div className="info__reconocimiento">
          <img className="info-logo" src="oma.jpg" alt="" />
          <p>
            Mención de Honor en el{" "}
            <b>certamen Nacional de la Olimpiada Matemática Argentina</b>.
            17/11/2017
          </p>
        </div>
        <div className="info__reconocimiento">
          <img className="info-logo" src="oma.jpg" alt="" />
          <p>
            Mención de honor en el{" "}
            <b>selectivo de la Olimpiada Matemática del Cono Sur</b> 2016.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reconocimientos;
