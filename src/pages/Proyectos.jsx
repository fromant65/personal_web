import React, { useEffect } from "react";
import { useState } from "react";
import "./../css/proyectos.css";
const Proyectos = () => {
  function animateOpenClose(height1, height2, div) {
    div.animate([{ height: `${height1}px` }, { height: `${height2}px` }], {
      duration: 500,
      easing: "ease",
      fill: "forwards",
    });
  }

  function switchTextbook() {
    setTextbook(!textbook);
    let info = document.querySelector(".textbook-info");
    if (!textbook) {
      document.getElementById("1arrow").classList.remove("proyecto__close");
      document.getElementById("1arrow").classList.add("proyecto__open");
      animateOpenClose(0, info.scrollHeight, info);
    } else {
      document.getElementById("1arrow").classList.add("proyecto__close");
      document.getElementById("1arrow").classList.remove("proyecto__open");
      animateOpenClose(info.scrollHeight, 0, info);
    }
  }
  function switchTextbookReact() {
    setTextbookReact(!textbookReact);
    let info = document.querySelector(".textbook-react-info");
    if (!textbookReact) {
      document.getElementById("2arrow").classList.remove("proyecto__close");
      document.getElementById("2arrow").classList.add("proyecto__open");
      animateOpenClose(0, info.scrollHeight, info);
    } else {
      document.getElementById("2arrow").classList.add("proyecto__close");
      document.getElementById("2arrow").classList.remove("proyecto__open");
      animateOpenClose(info.scrollHeight, 0, info);
    }
  }
  function switchChat() {
    setChat(!chat);
    let info = document.querySelector(".chat-realtime-info");
    if (!chat) {
      document.getElementById("3arrow").classList.remove("proyecto__close");
      document.getElementById("3arrow").classList.add("proyecto__open");
      animateOpenClose(0, info.scrollHeight, info);
    } else {
      document.getElementById("3arrow").classList.add("proyecto__close");
      document.getElementById("3arrow").classList.remove("proyecto__open");
      animateOpenClose(info.scrollHeight, 0, info);
    }
  }
  function switchCuatro() {
    setCuatro(!cuatro);
    let info = document.querySelector(".cuatro-en-linea-info");
    if (!cuatro) {
      document.getElementById("4arrow").classList.remove("proyecto__close");
      document.getElementById("4arrow").classList.add("proyecto__open");
      animateOpenClose(0, info.scrollHeight, info);
    } else {
      document.getElementById("4arrow").classList.add("proyecto__close");
      document.getElementById("4arrow").classList.remove("proyecto__open");
      animateOpenClose(info.scrollHeight, 0, info);
    }
  }
  //Switch para visibilidad del apartado textbook
  const [textbook, setTextbook] = useState(false);
  //Switch para visibilidad del apartado textbook react
  const [textbookReact, setTextbookReact] = useState(false);
  //Switch para visibilidad del apartado chat realtime
  const [chat, setChat] = useState(false);
  //Switch para visibilidad del apartado 4 en linea
  const [cuatro, setCuatro] = useState(false);
  return (
    <div className="proyectos__container page">
      <h1>Proyectos personales</h1>
      <p>
        Aquí esta la lista de proyectos que he hecho. Da click encima de un
        proyecto para ver información sobre el mismo
      </p>
      <div className="proyectos__textbook" onClick={switchTextbook}>
        <h2>
          <div className="arrow" id="1arrow">
            ►
          </div>
          Textbook
        </h2>
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
        </div>
      </div>
      <div className="proyectos__textbook__react" onClick={switchTextbookReact}>
        <h2>
          <div className="arrow" id="2arrow">
            ►
          </div>
          Textbook con React
        </h2>

        <div className="textbook-react-info">
          <p>
            Esta es una versión de Textbook donde el frontend está hecho con
            React. Tiene funcionalidades distintas a la otra versión, y también
            sigue en fase de desarrollo.
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
      </div>
      <div className="proyectos__chat-realtime" onClick={switchChat}>
        <h2>
          <div className="arrow" id="3arrow">
            ►
          </div>
          Chat Realtime
        </h2>
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
      </div>
      <div className="proyectos__4-en-linea" onClick={switchCuatro}>
        <h2>
          <div className="arrow" id="4arrow">
            ►
          </div>
          4 en línea
        </h2>
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
      </div>
    </div>
  );
};

export default Proyectos;
