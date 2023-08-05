import React from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./../css/nav.css";

const Nav = ({ pagina, setPagina, links, irAtras, irAdelante }) => {
  const arrowSize = 20;

  function gotoPage(link) {
    let nextPage = links[links.indexOf(link)];
    let currentPageContainer = document.querySelector(`.${pagina}__container`);
    let nextPageContainer = document.querySelector(`.${nextPage}__container`);
    currentPageContainer.animate(
      [
        { transform: "translateX(0)", opacity: "1" },
        { transform: "translateX(-100vw)", opacity: "0" },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );

    setTimeout(() => {
      currentPageContainer.style.display = "none";
    }, 500);
    nextPageContainer.style.display = "block";

    nextPageContainer.animate(
      [
        { transform: "translateX(100vw)", opacity: "0", display: "none" },
        { transform: "translateX(0)", opacity: "1", display: "block" },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );
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
        {pagina.charAt(0).toUpperCase() + pagina.slice(1)}
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
