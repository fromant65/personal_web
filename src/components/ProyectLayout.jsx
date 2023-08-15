import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Stack from "./Stack";

const ProyectLayout = ({ titulo, descripcion, link, repositorio, stack }) => {
  const linkSize = 20;
  return (
    <div className="proyecto__container">
      <h2 className="proyecto__titulo">{titulo}</h2>
      <div className="proyecto__stack">
        <Stack stack={stack} />
      </div>
      <p className="proyecto__descripcion">{descripcion}</p>

      <div className="proyecto__links__container">
        {link ? (
          <a className="proyecto__link" href={link} target="_blank">
            <FaLink className="proyecto__link__icon" size={linkSize} />
            <p>Link</p>
          </a>
        ) : (
          ""
        )}
        {repositorio ? (
          <a
            className="proyecto__repositorio"
            href={repositorio}
            target="_blank"
          >
            <FaGithub className="proyecto__link__icon" size={linkSize} />
            <p>GitHub</p>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProyectLayout;
