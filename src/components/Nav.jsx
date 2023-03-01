import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./../css/nav.css";

const Nav = ({ pagina, setPagina, links }) => {
  function irAtras(index) {
    let prevPage =
      links.indexOf(pagina) > 0 ? links[index - 1] : links[links.length - 1];
    //console.log(index, pagina, "atras");
    let currentPageContainer = document.querySelector(`.${pagina}__container`);
    let prevPageContainer = document.querySelector(`.${prevPage}__container`);
    currentPageContainer.animate(
      [
        { transform: "translateX(0)", opacity: "1" },
        { transform: "translateX(100vw)", opacity: "0" },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );
    prevPageContainer.animate(
      [
        { transform: "translateX(-100vw)", opacity: "0" },
        { transform: "translateX(0)", opacity: "1" },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );
    setPagina(links[links.indexOf(prevPage)]);
  }
  function irAdelante(index) {
    let nextPage = links.indexOf(pagina) < 5 ? links[index + 1] : links[0];

    let currentPageContainer = document.querySelector(`.${pagina}__container`);
    let nextPageContainer = document.querySelector(`.${nextPage}__container`);
    currentPageContainer.animate(
      [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(-100vw)", opacity: 0 },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );
    nextPageContainer.animate(
      [
        { transform: "translateX(100vw)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 },
      ],
      {
        duration: 500,
        fill: "forwards",
        easing: "ease",
      }
    );

    setPagina(links[links.indexOf(nextPage)]);
  }

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
