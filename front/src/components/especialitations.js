import React from "react"
import "../styles/especialitations.css"
import { EspeCard } from "./especard"

export const Especialitations = ()=>{
    return(
        <section id="especialitations-container">
            <header className="especialitations-header text-center">
                <h1 className="py-5">Estándares de Odontología <br/> Excepcionalmente Altos</h1>
            </header>
            <main className="especialitations-main d-flex flex-row align-items-center justify-content-around row mx-0 px-0">
                <EspeCard icon ="fa-tooth" 
                          title="Odontología Profesional" 
                          description="when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
                <EspeCard icon ="fa-user-group" 
                        title="Profesional Experimentados"
                        description="when an unknown printer took a galley of type and scrambled it to make a type specimen book"    
                />
                <EspeCard icon ="fa-toolbox" 
                        title="Equipamiento Moderno"
                        description="when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        />
            </main>
        </section>
    )
}