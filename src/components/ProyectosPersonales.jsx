import React from 'react'
import ProyectLayout from './ProyectLayout'

const proyectosPersonalesList = [
    {
        titulo: "RobotSim",
        descripcion: `Este proyecto fue un trabajo final individual de la materia Estructuras de Datos y Algoritmos.
        El mismo consiste en un robot con sensor (actividad 2, D* Lite) y sin sensor (actividad 1, Floodfill) que
        busca atravesár un entorno cuadriculado desconocido, desde la posición inicial a una posición final dada, 
        en la menor cantidad de movimientos posibles. El proyecto fue aprobado con nota perfecta (10/10).`,
        repositorio: "https://github.com/fromant65/Robot",
        stack: ["C"]
    },
    {
        titulo: "Images Crud",
        descripcion: `Este proyecto permite guardar, eliminar y ver imagenes dentro de
              una galería responsive. Uno puede hacerse una cuenta dentro de la
              App y guardar sus imágenes dentro de su cuenta. Se puede ingresar
              con Email o a traves de Google. Para subir una foto se debe buscar
              dentro del almacenamiento del dispositivo, darle un nombre y hacer
              click en "Upload Image".`,
        link: "https://imagescrud-de0a6.web.app/",
        stack: ["react", "firebase", "css", "javascript"]
    },
    {
        titulo: "Chat Realtime",
        descripcion: `Esta aplicación web nos permite tener un chat en tiempo real y 
        diversas salas anónimas donde hablar. Está hecho con Node.js y utiliza Express y Socket.io.`,
        link: "https://realtime-chat-xqpq.onrender.com/",
        stack: ["html", "css", "javascript", "nodejs", "express", "mongodb"]
    },
    {
        titulo: "Chat Realtime - Firebase",
        descripcion: `También implementé una versión con Firebase que tiene la opción de Register y Login, 
        además de fijar salas para acceder facilmente a ellas.`,
        link: "https://chat-fomant.firebaseapp.com/",
        stack: ["javascript", "css", "react", "firebase"]
    },

]

const ProyectosPersonales = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>
                Proyectos personales
            </h1>
            {proyectosPersonalesList.map(p => (
                <section key={p.titulo}>
                    <ProyectLayout
                        
                        titulo={p.titulo}
                        descripcion={p.descripcion}
                        link={p.link}
                        stack={p.stack}
                        repositorio={p.repositorio}
                    />
                </section>
            ))}
        </>
    )
}

export default ProyectosPersonales