import React from "react";
import "../css/inicio.css";
import Logo from "../components/Logo";
import LinksContacto from "../components/LinksContacto";
const Inicio = () => {
  return (
    <div className="inicio__container page">
      <div className="inicio__titulo__container">
        <div className="inicio__info">
          <h1 className="inicio__titulo">Hola, soy Fulvio Todone</h1>
          <h3 className="inicio__subtitulo">Desarrollador Web Fullstack</h3>
        </div>
        <div className="inicio__logo__container">
          <Logo className="inicio__logo"></Logo>
        </div>
      </div>

      {/*Cambiar esta lista por una descripción corta que resuma estos datos */}
      <div className="inicio__resumen">
        <p>
          Soy un <b>Desarrollador Web</b> apasionado, con un talento especial
          para resolver problemas complejos y crear soluciones innovadoras. Mi
          experiencia y <b>reconocimientos académicos en olimpiadas</b> me ha
          brindado una <b>base sólida en lógica y razonamiento</b>, lo que me
          permite abordar desafíos de programación con confianza y eficacia.
        </p>
        <p>
          Manejo distintas tecnologías para Frontend, como podrían serlo{" "}
          <b>HTML</b>, <b>CSS</b>, <b>Javascript</b> y <b>Typescript</b>.
          Respecto al Backend, utilizo <b>Node.js</b> junto con <b>Express</b> y{" "}
          <b>MongoDB</b>, aunque también tengo conocimientos en bases de datos
          relacionales <b>SQL</b>.
        </p>
        <p>
          Debido a las capacidades que ofrecen, utilizo frameworks como{" "}
          <b>React</b>, <b>Next.js</b> y <b>Firebase</b> para facilitar mi
          trabajo como desarrollador.
        </p>
        <LinksContacto />
      </div>
    </div>
  );
};

export default Inicio;
