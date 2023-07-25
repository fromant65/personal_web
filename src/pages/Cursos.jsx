import React from "react";
import "../css/cursos.css";

const Cursos = () => {
  return (
    <div className="cursos__container page">
      <h1 className="cursos__titulo">Cursos realizados</h1>
      <div className="cursos__lista">
        <div className="cursos__item">
          Curso de Desarrollo Web <b>(HTML, CSS, Javascript)</b> — Soy Dalto
          (Youtube)
          <div>
            <img
              className="cursos__logo"
              src="/habilidades/HTML.png"
              alt="html"
            />
            <img
              className="cursos__logo"
              src="/habilidades/CSS.png"
              alt="css"
            />
            <img
              className="cursos__logo"
              src="/habilidades/Javascript.png"
              alt="js"
            />
          </div>
        </div>
        <div className="cursos__item">
          <b>Node.js</b> Full Course — Dave Gray (Youtube)
          <div>
            <img
              className="cursos__logo"
              style={{ background: "#fff" }}
              src="/habilidades/nodejs.png"
              alt="js"
            />
            <img
              className="cursos__logo"
              src="/habilidades/express.png"
              alt="js"
            />
            <img
              className="cursos__logo"
              src="/habilidades/mongodb.png"
              alt="js"
            />
          </div>
        </div>
        <div className="cursos__item">
          Full <b>React</b> Course 2020 — freeCodeCamp.org
          <div>
            <img
              className="cursos__logo"
              src="/habilidades/React.png"
              alt="js"
            />
          </div>
        </div>
        <div className="cursos__item">
          Curso de <b>PYTHON</b> desde CERO — Soy Dalto (Youtube){" "}
          <div>
            <img
              className="cursos__logo"
              src="/habilidades/python.png"
              alt="js"
            />
          </div>
        </div>
        <div className="cursos__item">
          W3Schools <b>SQL</b> Tutorial
          <div>
            <img className="cursos__logo" src="/habilidades/SQL.png" alt="js" />
          </div>
        </div>
        <div className="cursos__item">
          <b>Firebase</b> React Course - Pedro Tech (Youtube)
          <div>
            <img
              className="cursos__logo"
              src="/habilidades/Firebase.png"
              alt="js"
            />
          </div>
        </div>
        <div className="cursos__item">
          Curso de <b>Test Driven Development</b> con Javascript, React y Vitest
          - Midulive (Youtube)
        </div>
        <div className="cursos__item">
          <b>Next.js</b> React Framework Course - freeCodeCamp.org (Youtube)
          <div>
            <img
              className="cursos__logo"
              src="/habilidades/nextjs.png"
              alt="js"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
