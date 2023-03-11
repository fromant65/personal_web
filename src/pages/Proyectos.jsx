import React, { useEffect } from "react";
import { useState } from "react";
import "./../css/proyectos.css";

const proyectosLista = [
  "textbook",
  "galeria-backend",
  "galeria-frontend",
  "chat-realtime",
  "cuatro-en-linea",
  "sorting-visualizer",
];

const Proyectos = () => {
  return (
    <div className="proyectos__container page">
      <h1>Proyectos personales</h1>
      <section className="proyectos__textbook">
        <h2>Textbook</h2>
        <div className="textbook-info">
          <div className="textbook-info-text-img">
            <p className="textbook-info-text">
              Textbook es un proyecto que busca simular una interfaz similar a
              la de una red social. Posee diversas funciones como registro, log
              in y log out, chat, perfil, busqueda de usuarios, creación de
              publicaciones, etc. Está hecho en Node.js, utilizando Express y
              MongoDB. El proyecto sigue en fase de desarrollo.
            </p>
            <div id="textbook-img-container">
              <img src="textbook.PNG" alt="textbook" id="textbook-img" />
            </div>
          </div>

          <h3>Repositorio del proyecto</h3>
          <a href="https://github.com/fromant65/Red_Social" target="_blank">
            Textbook
          </a>
          <h2>Version de React</h2>
          <p>
            Tambien desarrollé una versión de Textbook que utiliza React en el
            Frontend, y tiene algunas características distintivas respecto a la
            otra versión
          </p>
          <h3>Repositorios del proyecto</h3>
          <div>
            <a
              href="https://github.com/fromant65/textbookFront"
              target="_blank"
            >
              Frontend
            </a>
          </div>
          <div>
            <a href="https://github.com/fromant65/textbookBack" target="_blank">
              Backend
            </a>
          </div>
        </div>
      </section>
      <section className="proyectos__images-crud">
        <h2>Images Crud SQL</h2>
        <div className="images-crud-info">
          <div className="images-crud-text-img">
            <div className="images-crud-text">
              Este proyecto permite guardar, eliminar y cargar imagenes dentro
              de una galería Responsive. Las imágenes se guardan directamente en
              el servidor y un link a ellas se guarda en una base de datos SQL
            </div>
            <div id="images-crud-img-container">
              <img
                src="images-crud.png"
                alt="images-crud"
                id="images-crud-img"
              />
            </div>
          </div>

          <h3>Repositorios del proyecto</h3>
          <div>
            <a
              href="https://github.com/fromant65/images-crud-sql-front"
              target="_blank"
            >
              Frontend
            </a>
          </div>
          <div>
            <a
              href="https://github.com/fromant65/images-crud-sql-back"
              target="_blank"
            >
              Backend
            </a>
          </div>
        </div>
      </section>
      <section className="proyectos__chat-realtime">
        <h2>Chat Realtime</h2>
        <div className="chat-realtime-info">
          <div className="chat-realtime-text-img">
            <p className="chat-realtime-text">
              Esta aplicación web nos permite tener un chat en tiempo real y
              diversas salas anónimas donde hablar. Esta hecho con Node.js y
              utiliza Express y Socket.io.
            </p>
            <div id="chat-img-container">
              <img src="chat-realtime.PNG" alt="chat" id="chat-img" />
            </div>
          </div>
          <h3>Repositorio del proyecto</h3>
          <a href="https://github.com/fromant65/Realtime-Chat" target="_blank">
            Chat Realtime
          </a>
        </div>
      </section>
      <section className="proyectos__4-en-linea">
        <h2>4 en línea</h2>
        <div className="cuatro-en-linea-info">
          <div className="cuatro-text-img">
            <p className="cuatro-text">
              Esta app es el clásico juego 4 en linea donde dos jugadores ponen
              fichas en un tablero e intentan alinear 4 para ganar. Utiliza
              Socket.io para que los movimientos se puedan ver en tiempo real en
              el tablero si se juega desde dos computadoras distintas. La
              aplicación aún está en una fase temprana de desarrollo.
            </p>
            <div id="cuatro-img-container">
              <img src="cuatro-en-raya.PNG" alt="cuatro" id="cuatro-img" />
            </div>
          </div>

          <h3>Repositorio del proyecto</h3>
          <a href="https://github.com/fromant65/4-en-Raya" target="_blank">
            4 en Línea
          </a>
        </div>
      </section>
      <section className="proyectos__sorting-visualizer">
        <h2>Sorting Visualizer</h2>
        <div className="sorting-visualizer-info">
          <div className="sorting-text-img">
            <p className="sorting-text">
              Esta app permite elegir entre algunos algoritmos de ordenamiento,
              genera una lista del largo indicado desordenada, y muestra paso a
              paso como se ordena
            </p>
            <div id="sorting-img-container">
              <img src="sorting.png" alt="sorting" id="sorting-img" />
            </div>
          </div>
          <h3>Repositorio del Proyecto</h3>
          <a
            href="https://github.com/fromant65/sorting-visualizer"
            target="_blank"
          >
            Sorting Visualizer
          </a>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;
