import React from "react";
import "../styles/whyus.css"
import dentista from "../img/whyus.png"

export const WhyUs = () =>{
    return(
        <section id="whyus-container" >
            <div className="row mx-0 px-0">
                <div className="left-wu-side col-md-12  col-lg-6">
                    <div className=" ps-5 left-wu-side-inner">
                        <h2>¿Que Nos Hace Diferentes<br/> y Especiales?</h2>
                        <p className="text-muted py-3">scrambled it to make a type specimen book. <br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <ul className="ps-0">
                            <li className="whyus-list"><i class="fa-solid fa-check"></i> <p className="mb-0 ps-3">Equipo dental de alta calidad</p></li>
                            <li className="whyus-list"><i class="fa-solid fa-check"></i> <p className="mb-0 ps-3">Equipo dental de alta calidad</p></li>
                            <li className="whyus-list"><i class="fa-solid fa-check"></i> <p className="mb-0 ps-3">Equipo dental de alta calidad</p></li>
                        </ul>
                        <button className="btn btn-primary rounded-pill col-12 col-md-12 col-lg-6">Agendar Cita</button>
                    </div>   
                </div>
                <div className="right-wu-side mx-auto col-10 col-md-11 col-lg-6">
                    <img alt="whyus-image"  src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
            </div>
        </section>
    )
}