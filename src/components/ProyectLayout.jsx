import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProyectLayout = ({ titulo, descripcion, link, repositorio }) => {
  return (
    <div className="proyecto__container">
      <h2 className="proyecto__titulo">{titulo}</h2>
      <p className="proyecto__descripcion">{descripcion}</p>
      {link ? (
        <a className="proyecto__link" href={link} target="_blank">
          <FaLink size={30} />
        </a>
      ) : (
        ""
      )}
      {repositorio ? (
        <a className="proyecto__repositorio" href={repositorio} target="_blank">
          <FaGithub size={30} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProyectLayout;
