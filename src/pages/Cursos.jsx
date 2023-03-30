import React from "react";
import "../css/cursos.css";

const Cursos = () => {
  return (
    <div className="cursos__container page">
      <h1 className="cursos__titulo">Cursos realizados</h1>
      <ul>
        <li>
          Curso de Desarrollo Web <b>(HTML, CSS, Javascript)</b> — Soy Dalto
          (Youtube)
        </li>
        <li>
          <b>Node.js</b> Full Course — Dave Gray (Youtube)
        </li>
        <li>
          Full <b>React</b> Course 2020 — freeCodeCamp.org
        </li>
        <li>
          Curso de <b>PYTHON</b> desde CERO — Soy Dalto (Youtube){" "}
        </li>
        <li>
          W3Schools <b>SQL</b> Tutorial
        </li>
        <li>
          <b>Firebase</b> React Course - Pedro Tech (Youtube)
        </li>
        <li>
          Curso de <b>Test Driven Development</b> con Javascript, React y Vitest
          - Midulive (Youtube)
        </li>
      </ul>
    </div>
  );
};

export default Cursos;
