import React from "react"
import "../styles/especialitations.css"
import { EspeCard } from "./especard"

export const Especialitations = ()=>{
    return(
        <section id="especialitations-container">
            <header className="especialitations-header text-center">
                <h1 className="pt-5">Estándares de Odontología <br/> Excepcionalmente Altos</h1>
                <p className="p-5 col-10 col-md-11 col-lg-8 mx-auto">En nuestra clínica dental, nos enorgullecemos de ofrecer una atención integral y personalizada, utilizando las técnicas más avanzadas y el equipamiento más moderno. Nuestro equipo de profesionales altamente capacitados se dedica a garantizar resultados excepcionales, priorizando siempre la comodidad y el bienestar de nuestros pacientes. Creemos en la importancia de una experiencia dental agradable y segura, y nos esforzamos por crear un ambiente acogedor y de confianza para toda la familia.</p>
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