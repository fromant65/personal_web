import React, { useEffect } from "react";
import { useState } from "react";
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
          repositorio={"https://github.com/fromant65/images-crud"}
        />
        <ProyectLayout
          titulo="Version SQL - Frontend"
          descripcion="He hecho tambien una versión utilizando SQL para la base de
                datos. El repositorio del frontend se encuentra en el siguiente link:"
          repositorio={"https://github.com/fromant65/images-crud-sql-front"}
        />
        <ProyectLayout
          titulo={"Version SQL - Backend"}
          descripcion={
            "El repositorio del backend se encuentra en el siguiente link:"
          }
          repositorio={"https://github.com/fromant65/images-crud-sql-back"}
        />
      </section>
      <section className="proyectos__chat-realtime">
        <ProyectLayout
          titulo={"Chat Realtime"}
          descripcion={
            "Esta aplicación web nos permite tener un chat en tiempo real y diversas salas anónimas donde hablar. Está hecho con Node.js y utiliza Express y Socket.io."
          }
          link={"https://realtime-chat-xqpq.onrender.com/"}
          repositorio={"https://github.com/fromant65/Realtime-Chat"}
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
        />
      </section>

      <section className="proyectos__textbook">
        <ProyectLayout
          titulo={"Textbook"}
          descripcion={
            "Textbook es un proyecto que busca simular una interfaz similar a la de una red social. Posee diversas funciones como registro, log in y log out, chat, perfil, busqueda de usuarios, creación de publicaciones, etc. Está hecho en Node.js, utilizando Express y MongoDB. El proyecto sigue en fase de desarrollo."
          }
          repositorio={"https://github.com/fromant65/Red_Social"}
        />
        <ProyectLayout
          titulo={"Textbook - React version - Frontend"}
          descripcion={
            "Tambien desarrollé una versión de Textbook que utiliza React en el Frontend, y tiene algunas características distintivas respecto a la otra versión"
          }
          repositorio={"https://github.com/fromant65/textbookFront"}
        />
        <ProyectLayout
          titulo={"Textbook - React version - Backend"}
          descripcion={
            "Aquí podemos encontrar el repositorio al Backend del proyecto en su versión con React"
          }
          repositorio={"https://github.com/fromant65/textbookBack"}
        />
      </section>

      <section className="proyectos__4-en-linea">
        <ProyectLayout
          titulo={"4 en línea"}
          descripcion={
            "Esta app es el clásico juego 4 en linea donde dos jugadores ponen fichas en un tablero e intentan alinear 4 para ganar. Utiliza Socket.io para que los movimientos se puedan ver en tiempo real en el tablero si se juega desde dos computadoras distintas. La aplicación aún está en una fase temprana de desarrollo."
          }
          repositorio={"https://github.com/fromant65/4-en-Raya"}
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
        />
      </section>
      {/*
      <section>
        <ProyectLayout
          titulo={"Calendario"}
          descripcion={
            "Esta página es una app simple de calendario hecha con React"
          }
          repositorio={"https://github.com/fromant65/calendar"}
        />
      </section>
      */}
    </div>
  );
};

export default Proyectos;
