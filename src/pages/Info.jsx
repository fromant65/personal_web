import React from "react";
import "../css/info.css";

const Info = () => {
  return (
    <div className="info__container page">
      <div className="info__reconocimientos">
        <h2>Reconocimientos</h2>
        <ul>
          <li>
            Subcampeón del segundo nivel de la Olimpiada Matemática Santafesina.
            25/07/2017
          </li>
          <li>
            Mención de Honor en el certamen Nacional de la Olimpiada Matemática
            Argentina. 17/11/2017
          </li>
          <li>
            Mención de honor en el selectivo de la Olimpiada Matemática del Cono
            Sur 2016.
          </li>
        </ul>
      </div>
      <div className="info__idiomas">
        <h2>Idiomas</h2>
        <ul>
          <li id="idiomas-esp">Español: Nativo</li>
          <li id="idiomas-eng">
            Ingles:
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
              <b>Speaking:</b> Básico
            </div>
          </li>
        </ul>
      </div>
      <div className="info__contacto">
        <h2>Contacto</h2>
        <div>
          Instagram: <a href="https://www.instagram.com/filvii_/">@filvii_</a>
        </div>
        <div>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/fulvio-rom%C3%A1n-todone-23170a257/">
            Fulvio Román Todone
          </a>
        </div>
        <div>
          Gmail: fromant65@gmail.com {/*Hacer un form para emails quiza?*/}
        </div>
        <div>Whatsapp: +54 9 341 507 3270</div>
        <div>
          Github: <a href="https://github.com/fromant65">fromant65</a>
        </div>
      </div>
    </div>
  );
};

export default Info;
