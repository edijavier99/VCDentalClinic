import React from "react";
import "../styles/whyus.css"
import dentista from "../img/whyus.png"

export const WhyUs = () =>{
    return(
        <section id="whyus-container" className="mt-5">
            <div className="row mx-0 px-0">
                <div className="left-wu-side col-md-6">
                    <div className=" ps-5">
                        <h2>¿Que Nos Hace Diferentes<br/> y Especiales?</h2>
                        <p className="text-muted py-3">scrambled it to make a type specimen book. <br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <ul className="ps-0">
                            <li className="whyus-list"><i class="fa-solid fa-check"></i> <p className="mb-0 ps-3">Equipo dental de alta calidad</p></li>
                            <li className="whyus-list"><i class="fa-solid fa-check"></i> <p className="mb-0 ps-3">Equipo dental de alta calidad</p></li>
                            <li className="whyus-list"><i class="fa-solid fa-check"></i> <p className="mb-0 ps-3">Equipo dental de alta calidad</p></li>
                        </ul>
                        <button className="btn btn-primary rounded-pill">Agendar Cita</button>
                    </div>   
                </div>
                <div className="right-wu-side col-md-6">
                    <img alt="whyus-image" src={dentista} />
                </div>
            </div>
        </section>
    )
}