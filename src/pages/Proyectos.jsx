import React from "react";
import "./../css/proyectos.css";
import ProyectLayout from "../components/ProyectLayout";
// import proyectos from "../data/projects.json";
// La DB de projects.json servirá para la versión en inglés del Portfolio

const Proyectos = () => {
  return (
    <div className="proyectos__container page">
      <h1>Proyectos personales</h1>
      <section className="proyectos__images-crud">
        <ProyectLayout
          titulo="Images Crud"
          descripcion='Este proyecto permite guardar, eliminar y ver imagenes dentro de
              una galería responsive. Uno puede hacerse una cuenta dentro de la
              App y guardar sus imágenes dentro de su cuenta. Se puede ingresar
              con Email o a traves de Google. Para subir una foto se debe buscar
              dentro del almacenamiento del dispositivo, darle un nombre y hacer
              click en "Upload Image".'
          link={"https://imagescrud-de0a6.web.app/"}
          stack={["react", "firebase", "css", "javascript"]}
        />
      </section>
      <section className="proyectos__chat-realtime">
        <ProyectLayout
          titulo={"Chat Realtime"}
          descripcion={
            "Esta aplicación web nos permite tener un chat en tiempo real y diversas salas anónimas donde hablar. Está hecho con Node.js y utiliza Express y Socket.io."
          }
          link={"https://realtime-chat-xqpq.onrender.com/"}
          stack={["html", "css", "javascript", "nodejs", "express", "mongodb"]}
        />
        <ProyectLayout
          titulo={"Versión Firebase"}
          descripcion={
            "También implementé una versión con Firebase que tiene la opción de Register y Login, además de fijar salas para acceder facilmente a ellas."
          }
          link={"https://chat-fomant.firebaseapp.com/"}
          stack={["javascript", "css", "react", "firebase"]}
        />
      </section>
      <section className="proyectos__data-structures">
        <ProyectLayout
          titulo={"Data Structures"}
          descripcion={
            "Este proyecto es una librería de estructuras de datos implementada en C. Cuenta con estructuras como listas, colas, pilas, árboles, matrices, entre otras."
          }
          stack={["C"]}
          repositorio={"https://github.com/fromant65/data_structures"}
        ></ProyectLayout>
      </section>
      <section>
        <ProyectLayout
          titulo={"Ultimate Tic Tac Toe"}
          descripcion={
            "Esta aplicación está hecha con Svelte y Typescript y nos permite jugar al juego Super TaTeTi, el cual consta de un tablero de 3x3 tableros de TaTeTi, los cuales se marcan con una X o una O cuando el jugador gana en dicho tablero. El jugador que marque 3 tableros en linea o tenga más tableros marcados cuando no haya más movimientos posibles, gana la partida. Al hacer un movimiento, si es posible, el jugador debe jugar en el tablero correspondiente a la casilla que marcó su adversario. Si no es posible, puede elegir en qué tablero jugar."
          }
          link={"https://ultimate-tic-tac-toe-fromant.netlify.app/"}
          stack={["javascript", "html", "css", "svelte", "typescript"]}
          repositorio={"https://github.com/fromant65/superTicTacToe"}
        />
      </section>
      <section className="proyectos__sorting-visualizer">
        <ProyectLayout
          titulo={"Sorting Visualizer"}
          descripcion={
            'Esta app permite elegir entre algunos algoritmos de ordenamiento, genera una lista del largo indicado desordenada, y muestra paso apaso como se ordena al presionar "Ordenar!"'
          }
          link={"https://sorting-visualizer-fromant.netlify.app/"}
          repositorio={"https://github.com/fromant65/sorting-visualizer"}
          stack={["react", "javascript", "css"]}
        />
      </section>
      <section>
        <ProyectLayout
          titulo={"Interactive Map"}
          descripcion={
            "Esta app es un mapa hecho en canvas donde se puede seleccionar y deseleccionar regiones haciendo click en ellas. Aplica POO."
          }
          link={"https://interactive-map-fromant.netlify.app/"}
          repositorio={"https://github.com/fromant65/Interactive_Map"}
          stack={["javascript", "css", "react"]}
        />
      </section>
      <section className="proyectos__conway-life">
        <ProyectLayout
          titulo={"Conway Life"}
          descripcion={
            "Esta app es una simulación del juego de la vida de Conway hecha con React que corre 100 generaciones desde una posición aleatoria y vuelve a generar una nueva posición aleatoria."
          }
          link={"https://conwaylife.netlify.app/"}
          repositorio={"https://github.com/fromant65/conwaylife"}
          stack={["javascript", "css", "react"]}
        />
      </section>
      <section>
        <ProyectLayout
          titulo={"Japanese Sentence Generator"}
          descripcion={
            "Este proyecto es un script que nos permite generar palabras y oraciones en japonés con sus respectivas lecturas en hiragana y traducciones al inglés. Desarrollé este proyecto como una herramienta para mi propio aprendizaje del lenguaje."
          }
          repositorio={
            "https://github.com/fromant65/japanese_sentence_generator"
          }
          stack={["javascript", "nodejs"]}
        />
      </section>
      <section>
        <ProyectLayout
          titulo={"Password Generator"}
          descripcion={
            "Este proyecto es una página web simple que genera contraseñas seguras en base al input del usuario."
          }
          link={"https://password-generator-fromant.netlify.app/"}
          repositorio={"https://github.com/fromant65/Password_Generator/"}
          stack={["react", "javascript", "css"]}
        />
      </section>
      <section>
        <ProyectLayout
          titulo={"Simulador de Torneos"}
          descripcion={
            'Esta app es una página web simple que genera un fixture de un torneo con una determinada cantidad de equipos con "fuerza" asignada aleatoriamente y permite simular el torneo. Los equipos con más fuerza tienen mas chances de ganar el torneo.'
          }
          link={"https://torneo-simulador-fromant.netlify.app/"}
          repositorio={"https://github.com/fromant65/Torneo_Simulador"}
          stack={["javascript", "react", "css"]}
        />
      </section>
    </div>
  );
};

export default Proyectos;
