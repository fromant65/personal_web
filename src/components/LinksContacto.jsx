import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const LinksContacto = () => {
  const iconSize = 60;
  return (
    <nav aria-label="Contact links">
      <a
        href="https://www.linkedin.com/in/fulvio-rom%C3%A1n-todone-23170a257/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-[var(--main1)] transition-colors"
      >
        <FaLinkedin className="links-contacto__icon" size={iconSize} />
      </a>
      <a
        href="https://github.com/fromant65"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-[var(--main2)] transition-colors"
      >
        <FaGithub className="links-contacto__icon" size={iconSize} />
      </a>
      <a
        href="https://wa.me/+5493415073270"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-[var(--main3)] transition-colors"
      >
        <FaWhatsapp className="links-contacto__icon" size={iconSize} />
      </a>
    </nav>

  );
};

export default LinksContacto;
