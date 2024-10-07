import React from 'react'
import ProyectLayout from './ProyectLayout'

const proyectosProfesionalesLista = [
    {
        titulo: "Joya App",
        descripcion: `Esta aplicación es una herramienta de contabilidad diseñada para panaderías`,
        link: "https://joya.fiduxion.com/",
        stack: ["NextJs", "SQL", "Typescript"]
    }
]

const ProyectosProfesionales = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>
                Proyectos Profesionales
            </h1>
            {proyectosProfesionalesLista.map(p => (
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

export default ProyectosProfesionales