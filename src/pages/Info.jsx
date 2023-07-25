import React from "react";
import "../css/info.css";

const Info = () => {
  return (
    <div className="info__container page">
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
      <div className="info__idiomas">
        <h2>Idiomas</h2>
        <div>
          <div id="idiomas-esp">
            <p>
              <img className="info-idioma-flag" src="argentina.png" alt="" />{" "}
              Español:
            </p>{" "}
            Nativo
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
              <b>Speaking:</b> Básico
            </div>
          </div>
        </div>
      </div>
      <div className="info__contacto">
        <h2>Contacto</h2>
        <div>
          <img
            className="info__contact__logo"
            src="linkedin.png"
            alt="LinkedIn"
          />
          <a href="https://www.linkedin.com/in/fulvio-rom%C3%A1n-todone-23170a257/">
            Fulvio Román Todone
          </a>
        </div>
        <div>
          <img className="info__contact__logo" src="gmail.png" alt="Gmail" />{" "}
          fromant65@gmail.com {/*Hacer un form para emails quiza?*/}
        </div>
        <div>
          <img
            className="info__contact__logo"
            src="/habilidades/Github.png"
            alt="GitHub"
          />{" "}
          <a href="https://github.com/fromant65">fromant65</a>
        </div>
        <div>
          <img
            className="info__contact__logo"
            src="instagram.png"
            alt="Instagram"
          />{" "}
          <a href="https://www.instagram.com/filvii_/">@filvii_</a>
        </div>
        <div>
          <img
            className="info__contact__logo"
            src="whatsapp.png"
            alt="WhatsApp"
          />
          +54 9 341 507 3270
        </div>
      </div>
    </div>
  );
};

export default Info;
