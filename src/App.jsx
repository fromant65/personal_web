import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

//Components
import Nav from "./components/Nav";

//Pages
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Formacion from "./pages/Formacion";
import Habilidades from "./pages/Habilidades";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
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
  const page = window.location.pathname.slice(1);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["League Spartan", "Open Sans"],
      },
    });
  }, []);
  /*useEffect(() => {
    console.log(page);
  });*/
  const [currentPage, setCurrentPage] = useState(page || "inicio");

  return (
    <div className="App">
      <Nav
        pagina={currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        index={links.indexOf(currentPage)}
        setPagina={setCurrentPage}
        links={links}
      ></Nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
