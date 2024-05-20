import React from "react";
import "../styles/introduction.css"
import dentista from "../img/mejorada.png"
import { Navbar } from "./navbar";

export const  Introduction = () =>{
    return(
        <section id="intro-board" className="d-flex">
            <Navbar/>
            <div className="row intro-board-row mx-0 px-0">
                <div className="col-md-12 col-lg-6 ps-5  intro-left-side d-flex flex-column">
                    <h1>Consulta Tus Problemas Dentales Con Nosotros</h1>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="btn btn-primary rounded-pill col-lg-4 col-md-6 col-12  mt-3 px-0">Agendar cita</button>
                    <div className="small-description-tooth d-flex">
                        <div className="rounded-circle bg-primary tooth-board"><i class="fa-solid fa-tooth"></i></div> 
                        <p className="mb-0 ps-3">Somos capaces de restablecer la <span className="small-detail">salud dental de tu diente</span></p>
                    </div>
                </div>
                <div className=" mx-auto col-md-8 col-lg-6 d-flex right-side-intro justify-content-center">
                   <img src={dentista} />
                </div>
            </div>
        </section>
    )
} 