import React from "react";
import "../css/cursos.css";
import { FaHtml5, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiJest,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Cursos = () => {
  return (
    <div className="cursos__container page">
      <h1 className="cursos__titulo">Cursos realizados</h1>
      <div className="cursos__lista">
        <div className="cursos__item">
          Curso de Desarrollo Web <b>(HTML, CSS, Javascript)</b> — Soy Dalto
          (Youtube)
          <div>
            <FaHtml5 className="cursos__item__logo" size={50} />
            <DiCss3 className="cursos__item__logo" size={50} />
            <TbBrandJavascript className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          <b>Node.js</b> Full Course — Dave Gray (Youtube)
          <div>
            <FaNodeJs className="cursos__item__logo" size={50} />
            <SiExpress className="cursos__item__logo" size={50} />
            <SiMongodb className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          Full <b>React</b> Course 2020 — freeCodeCamp.org
          <div>
            <FaReact className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          Curso de <b>PYTHON</b> desde CERO — Soy Dalto (Youtube){" "}
          <div>
            <FaPython className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          W3Schools <b>SQL</b> Tutorial
          <div>
            <SiMysql className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          <b>Firebase</b> React Course - Pedro Tech (Youtube)
          <div>
            <SiFirebase className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          Curso de <b>Test Driven Development</b> con Javascript, React y Vitest
          - Midulive (Youtube)
          <div>
            <SiJest className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          <b>Next.js</b> React Framework Course - freeCodeCamp.org (Youtube)
          <div>
            <SiNextdotjs className="cursos__item__logo" size={50} />
          </div>
        </div>
        <div className="cursos__item">
          <b>Typescript</b> Tutorial for Beginners - Programming with Mosh
          (Youtube)
          <div>
            <SiTypescript className="cursos__item__logo" size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
