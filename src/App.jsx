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
  const [prevPage, setPrevPage] = useState("info");
  const [nextPage, setNextPage] = useState("proyectos");

  useEffect(() => {
    document.querySelector(`.${currentPage}__container`).style.transform =
      "translateX(0)";
  });
  return (
    <div className="App">
      <Nav pagina={currentPage} setPagina={setCurrentPage} links={links} />

      <div className="pages">
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
