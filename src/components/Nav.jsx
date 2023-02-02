import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/nav.css";

const Nav = ({ pagina, index, setPagina, links }) => {
  function irAtras(index) {
    if (index > 0) {
      //console.log(index, pagina, "atras");
      setPagina(links[index - 1]);
      setPrevPage(links[index - 2]);
      setNextPage(links[index]);
    }
  }
  function irAdelante(index) {
    if (index < 5) {
      //console.log(index, pagina, "adelante");
      setPagina(links[index + 1]);
      setPrevPage(links[index]);
      setNextPage(links[index + 2]);
    }
  }

  const switchMenu = () => {
    if (isMenuOpen) {
      document.querySelector(".nav__menu").classList.remove("nav__open-menu");
    } else {
      document.querySelector(".nav__menu").classList.add("nav__open-menu");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const [prevPage, setPrevPage] = useState(links[index - 1]);
  const [nextPage, setNextPage] = useState(links[index + 1]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /*useEffect(() => {
    console.log(prevPage, nextPage);
  }, [prevPage, nextPage]);*/
  return (
    <div className="nav__container">
      <Link
        className="nav__return"
        onClick={() => irAtras(index)}
        to={prevPage ? `/${prevPage}` : "#"}
      >
        {"<"}
      </Link>
      <div className="nav__dropdown" onClick={() => switchMenu()}>
        {pagina}
      </div>

      <Link
        className="nav__forward"
        onClick={() => irAdelante(index)}
        to={nextPage ? `/${nextPage}` : "#"}
      >
        {">"}
      </Link>
      <div className="nav__menu">
        {isMenuOpen ? (
          <>
            {pagina === "Inicio" ? (
              ""
            ) : (
              <Link
                className="nav__menu__link nav__menu__link-1"
                to="/inicio"
                onClick={() => {
                  setPagina("inicio");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Inicio
              </Link>
            )}
            {pagina === "Proyectos" ? (
              ""
            ) : (
              <Link
                className="nav__menu__link nav__menu__link-2"
                to="/proyectos"
                onClick={() => {
                  setPagina("proyectos");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Proyectos
              </Link>
            )}
            {pagina === "Formacion" ? (
              ""
            ) : (
              <Link
                className="nav__menu__link nav__menu__link-3"
                to="/formacion"
                onClick={() => {
                  setPagina("formacion");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Formacion
              </Link>
            )}
            {pagina === "Cursos" ? (
              ""
            ) : (
              <Link
                className="nav__menu__link nav__menu__link-4"
                to="/cursos"
                onClick={() => {
                  setPagina("cursos");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Cursos
              </Link>
            )}
            {pagina === "Habilidades" ? (
              ""
            ) : (
              <Link
                className="nav__menu__link nav__menu__link-5"
                to="/habilidades"
                onClick={() => {
                  setPagina("habilidades");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Habilidades
              </Link>
            )}
            {pagina === "Info" ? (
              ""
            ) : (
              <Link
                className="nav__menu__link nav__menu__link-6"
                to="/info"
                onClick={() => {
                  setPagina("info");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Info Extra
              </Link>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
