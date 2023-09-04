import React from "react";
import "../css/habilidades.css";
//import Habilidad from "../components/Habilidad";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";

const Habilidades = () => {
  const iconSize = 30;
  return (
    <div className="habilidades__container page">
      <div className="habilidades__stack basic-stack">
        <p>
          Herramientas básicas:{" "}
          <b className="habilidades__names">
            HTML5, CSS3, JavaScript, TypeScript
          </b>{" "}
        </p>
        <FaHtml5 className="habilidades__icon" size={iconSize} />
        <FaCss3 className="habilidades__icon" size={iconSize} />
        <SiJavascript className="habilidades__icon" size={iconSize} />
        <SiTypescript className="habilidades__icon" size={iconSize} />
      </div>
      <div className="habilidades__stack frontend-stack">
        <p>
          Herramientas de Frontend:{" "}
          <b className="habilidades__names">React, Next.js, Svelte</b>
        </p>
        <FaReact className="habilidades__icon" size={iconSize} />
        <TbBrandNextjs className="habilidades__icon" size={iconSize} />
        <SiSvelte className="habilidades__icon" size={iconSize} />
      </div>
      <div className="habilidades__stack backend-stack">
        <p>
          Herramientas de Backend:{" "}
          <b className="habilidades__names">
            Node.js, Express.js, SQL, MongoDB, Firebase
          </b>{" "}
        </p>
        <FaNodeJs className="habilidades__icon" size={iconSize} />
        <SiExpress className="habilidades__icon" size={iconSize} />
        <SiSqlite className="habilidades__icon" size={iconSize} />
        <SiMongodb className="habilidades__icon" size={iconSize} />
        <SiFirebase className="habilidades__icon" size={iconSize} />
      </div>
      <div className="habilidades__stack version-stack">
        <p>
          Herramientas de control de versiones:{" "}
          <b className="habilidades__names">Git, Github</b>
        </p>
        <FaGit className="habilidades__icon" size={iconSize} />
        <FaGithub className="habilidades__icon" size={iconSize} />
      </div>
      <div className="habilidades__stack languages-stack">
        <p>
          Otros lenguajes: <b className="habilidades__names"> Python</b>
        </p>
        <FaPython className="habilidades__icon" size={iconSize} />
      </div>
    </div>
  );
};

export default Habilidades;
