import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const LinksContacto = () => {
  const iconSize = 30;
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/fulvio-rom%C3%A1n-todone-23170a257/"
        target="_blank"
      >
        <FaLinkedin className="links-contacto__icon" size={iconSize} />
      </a>
      <a href="https://github.com/fromant65" target="_blank">
        <FaGithub className="links-contacto__icon" size={iconSize} />
      </a>
      <a href="https://wa.me/+5493415073270" target="_blank">
        <FaWhatsapp className="links-contacto__icon" size={iconSize} />
      </a>
    </div>
  );
};

export default LinksContacto;
