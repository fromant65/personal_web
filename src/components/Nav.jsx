import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./../css/nav.css";

const Nav = ({ pagina, setPagina, links, irAtras, irAdelante }) => {
  function gotoPage(link) {
    let nextPage = links[links.indexOf(link)];

    let currentPageContainer = document.querySelector(`.${pagina}__container`);
    let nextPageContainer = document.querySelector(`.${nextPage}__container`);
    currentPageContainer.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-100vw)" }],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );
    nextPageContainer.animate(
      [{ transform: "translateX(100vw)" }, { transform: "translateX(0)" }],
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

  return (
    <div className="nav__container">
      <button
        className="nav__return"
        onClick={() => irAtras(links.indexOf(pagina))}
      >
        {"<"}
      </button>
      <div className="nav__dropdown" onClick={() => switchMenu()}>
        {pagina.charAt(0).toUpperCase() + pagina.slice(1)}
      </div>

      <button
        className="nav__forward"
        onClick={() => irAdelante(links.indexOf(pagina))}
      >
        {">"}
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
                {link}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Nav;
