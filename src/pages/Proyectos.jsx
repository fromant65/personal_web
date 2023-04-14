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
      <h2>Páginas de proyectos</h2>
      <section className="proyectos__images-crud">
        <h2>Images Crud</h2>
        <div className="images-crud-info">
          <div className="images-crud-text-img">
            <div className="images-crud-text">
              Este proyecto permite guardar, eliminar y ver imagenes dentro de
              una galería responsive. Uno puede hacerse una cuenta dentro de la
              App y guardar sus imágenes dentro de su cuenta. Se puede ingresar
              con Email o a traves de Google. Para subir una foto se debe buscar
              dentro del almacenamiento del dispositivo, darle un nombre y hacer
              click en "Upload Image".
            </div>
            <div id="images-crud-img-container">
              <img
                src="images-crud.png"
                alt="images-crud"
                id="images-crud-img"
              />
            </div>
          </div>
          <div>
            <a
              target="_blank"
              href="https://imagescrud-de0a6.web.app/"
              className="images-crud-link"
            >
              Link al Proyecto
            </a>
          </div>
          <h3>Repositorio</h3>
          <div className="images-crud-info">
            El repositorio de este proyecto se puede encontrar en el siguiente{" "}
            <a
              target="_blank"
              href="https://github.com/fromant65/images-crud"
              className="images-crud-repo"
            >
              link
            </a>
          </div>
          <h3>Images Crud SQL</h3>
          <div className="images-crud-info">
            <div className="images-crud-text-img">
              <div className="images-crud-text">
                He hecho tambien una versión utilizando SQL para la base de
                datos cuyos repositorios se encuentran en los siguientes links:
                <ul>
                  <li>
                    <a
                      href="https://github.com/fromant65/images-crud-sql-front"
                      target="_blank"
                    >
                      Frontend
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/fromant65/images-crud-sql-back"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="proyectos__sorting-visualizer">
        <h2>Sorting Visualizer</h2>
        <div className="sorting-visualizer-info">
          <div className="sorting-text-img">
            <p className="sorting-text">
              Esta app permite elegir entre algunos algoritmos de ordenamiento,
              genera una lista del largo indicado desordenada, y muestra paso a
              paso como se ordena al presionar "Ordenar!"
            </p>
            <div id="sorting-img-container">
              <img src="sorting.png" alt="sorting" id="sorting-img" />
            </div>
          </div>
          <h3>Link del proyecto</h3>
          <a
            href="https://sorting-visualizer-fromant.netlify.app/"
            target="_blank"
          >
            Sorting Visualizer - App
          </a>
          <h3>Repositorio:</h3>
          <a
            href="https://github.com/fromant65/sorting-visualizer"
            target="_blank"
          >
            Sorting Visualizer - Github
          </a>
        </div>
      </section>
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
          <h3>Link del proyecto</h3>
          <a href="https://realtime-chat-xqpq.onrender.com/" target="_blank">
            Chat Realtime
          </a>
          <h3>Repositorio del proyecto</h3>
          <a href="https://github.com/fromant65/Realtime-Chat" target="_blank">
            Github
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
    </div>
  );
};

export default Proyectos;
