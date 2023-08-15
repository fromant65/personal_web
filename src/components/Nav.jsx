import React from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./../css/nav.css";
import { esconderPaginaIzq, mostrarPaginaIzq } from "../utils/animations";

const Nav = ({ pagina, setPagina, links, irAtras, irAdelante }) => {
  const arrowSize = 20;

  function gotoPage(link) {
    let nextPage = links[links.indexOf(link)];
    esconderPaginaIzq(pagina);
    mostrarPaginaIzq(nextPage);
    setPagina(nextPage);
    document.querySelector(".nav__menu").classList.remove("nav__open-menu");
    setIsMenuOpen(false);
  }

  const switchMenu = () => {
    if (isMenuOpen) {
      document.querySelector(".nav__menu").classList.remove("nav__open-menu");
    } else {
      document.querySelector(".nav__menu").classList.add("nav__open-menu");
    }
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function capitalize(page) {
    let capitalizedPage = page.replace(/^\w/, (c) => c.toUpperCase());
    return capitalizedPage;
  }

  return (
    <div className="nav__container">
      <button
        className="nav__return"
        onClick={() => irAtras(links.indexOf(pagina))}
      >
        <FaArrowAltCircleLeft size={arrowSize} />
        <p className="nav__return_text">Anterior</p>
      </button>
      <div className="nav__dropdown" onClick={() => switchMenu()}>
        {capitalize(pagina)}
      </div>
      <button
        className="nav__forward"
        onClick={() => irAdelante(links.indexOf(pagina))}
      >
        <FaArrowAltCircleRight size={arrowSize} />
        <p className="nav__forward_text">Siguiente</p>
      </button>
      <div className="nav__menu">
        {links.map((link) => {
          if (link != pagina) {
            return (
              <div
                key={link}
                className="nav__menu__link"
                onClick={() => gotoPage(link)}
              >
                {capitalize(link)}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Nav;
