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
  SiNextdotjs,
  SiTypescript,
  SiSvelte,
} from "react-icons/si";

const Cursos = () => {
  const logoSize = 30;
  return (
    <div className="cursos__container page">
      <h1 className="cursos__titulo">Cursos realizados</h1>
      <div className="cursos__lista">
        <div className="cursos__item">
          <p>
            Curso de Desarrollo Web <b>(HTML, CSS, Javascript)</b> — Soy Dalto
            (Youtube)
          </p>
          <p>
            <b>Typescript</b> Tutorial for Beginners - Programming with Mosh
            (Youtube)
          </p>

          <div>
            <FaHtml5 className="cursos__item__logo" size={logoSize} />
            <DiCss3 className="cursos__item__logo" size={logoSize} />
            <TbBrandJavascript className="cursos__item__logo" size={logoSize} />
            <SiTypescript className="cursos__item__logo" size={logoSize} />
          </div>
        </div>
        <div className="cursos__item">
          <p>
            <b>Node.js</b> Full Course — Dave Gray (Youtube){" "}
          </p>
          <p>
            Full <b>React</b> Course 2020 — freeCodeCamp.org
          </p>
          The <b>Svelte</b> Crash Course — Laith Academy
          <div>
            <FaNodeJs className="cursos__item__logo" size={logoSize} />
            <SiExpress className="cursos__item__logo" size={logoSize} />
            <SiMongodb className="cursos__item__logo" size={logoSize} />
            <FaReact className="cursos__item__logo" size={logoSize} />
            <SiSvelte className="cursos__item__logo" size={logoSize} />
          </div>
        </div>

        <div className="cursos__item">
          <p>
            W3Schools <b>SQL</b> Tutorial
          </p>
          <p>
            <b>Firebase</b> React Course - Pedro Tech (Youtube)
          </p>
          <p>
            <b>Next.js</b> React Framework Course - freeCodeCamp.org (Youtube)
          </p>
          <div>
            <SiMysql className="cursos__item__logo" size={logoSize} />
            <SiFirebase className="cursos__item__logo" size={logoSize} />
            <SiNextdotjs className="cursos__item__logo" size={logoSize} />
          </div>
        </div>
        <div className="cursos__item">
          Curso de <b>PYTHON</b> desde CERO — Soy Dalto (Youtube){" "}
          <div>
            <FaPython className="cursos__item__logo" size={logoSize} />
          </div>
        </div>
        <div className="cursos__item">
          <p>
            Curso de <b>Test Driven Development</b> con Javascript, React y
            Vitest - Midulive (Youtube){" "}
          </p>
          <p>
            Curso de <b>POO</b> con <b>PYTHON</b> desde CERO (Completo) - Soy
            Dalto (Youtube)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
