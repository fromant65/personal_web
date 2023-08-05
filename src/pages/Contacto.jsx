import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Contacto = () => {
  const iconSize = 20;
  return (
    <div className="info__contacto">
      <h2>Contacto</h2>
      <div>
        <FaLinkedin className="info__icon" size={iconSize} />
        <a
          href="https://www.linkedin.com/in/fulvio-rom%C3%A1n-todone-23170a257/"
          target="_blank"
        >
          Fulvio Román Todone
        </a>
      </div>
      <div>
        <SiGmail className="info__icon" size={iconSize} />
        fromant65@gmail.com {/*Hacer un form para emails quiza?*/}
      </div>
      <div>
        <FaGithub className="info__icon" size={iconSize} />
        <a href="https://github.com/fromant65" target="_blank">
          fromant65
        </a>
      </div>
      <div>
        <FaWhatsapp className="info__icon" size={iconSize} />
        <a href="https://wa.me/+5493415073270" target="_blank">
          +54 9 341 507 3270
        </a>
      </div>
    </div>
  );
};

export default Contacto;
