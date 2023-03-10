import { useEffect, useState } from "react";
import "./App.css";
import WebFont from "webfontloader";

//Components
import Nav from "./components/Nav";

//Pages
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Formacion from "./pages/Formacion";
import Habilidades from "./pages/Habilidades";
import Info from "./pages/Info";
import Proyectos from "./pages/Proyectos";

const links = [
  "inicio",
  "proyectos",
  "formacion",
  "cursos",
  "habilidades",
  "info",
];

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["League Spartan", "Open Sans"],
      },
    });
  }, []);

  const [currentPage, setCurrentPage] = useState("inicio");
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);

  useEffect(() => {
    document.querySelector(`.${currentPage}__container`).style.transform =
      "translateX(0)";
  });

  function irAtras(index) {
    let prevPage =
      links.indexOf(currentPage) > 0
        ? links[index - 1]
        : links[links.length - 1];
    //console.log(index, pagina, "atras");
    let currentPageContainer = document.querySelector(
      `.${currentPage}__container`
    );
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
    setCurrentPage(links[links.indexOf(prevPage)]);
  }
  function irAdelante(index) {
    let nextPage = links.indexOf(currentPage) < 5 ? links[index + 1] : links[0];

    let currentPageContainer = document.querySelector(
      `.${currentPage}__container`
    );
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
    console.log(links[links.indexOf(nextPage)]);
    setCurrentPage(links[links.indexOf(nextPage)]);
  }

  function handleLateralScroll(e) {
    if (initialX === null) return;
    const currentX = e.changedTouches[0].clientX;
    const currentY = e.changedTouches[0].clientY;
    const diffX = initialX - currentX;
    const diffY = Math.abs(initialY - currentY);
    const axisDiff = Math.abs(diffX) - diffY;
    if (diffX < 0 && axisDiff > 0) {
      // el usuario deslizó hacia la izquierda
      irAtras(links.indexOf(currentPage));
    } else if (diffX > 0 && axisDiff > 0) {
      irAdelante(links.indexOf(currentPage));
    }
  }

  return (
    <div className="App">
      <Nav
        pagina={currentPage}
        setPagina={setCurrentPage}
        links={links}
        irAtras={irAtras}
        irAdelante={irAdelante}
      />
      <div
        className="pages"
        onTouchStart={(e) => {
          setInitialX(e.touches[0].clientX);
          setInitialY(e.touches[0].clientY);
        }}
        onTouchEnd={(e) => {
          handleLateralScroll(e);
        }}
      >
        <Inicio></Inicio>
        <Proyectos></Proyectos>
        <Formacion></Formacion>
        <Cursos></Cursos>
        <Habilidades></Habilidades>
        <Info></Info>
      </div>
    </div>
  );
}

export default App;
