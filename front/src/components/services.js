import React from "react";
import dentist from "../img/file7.png"
import "../styles/services.css"

export const Services = () =>{
    return(
            <section id="services-container" className="row mx-0">
                <div className="services-left-side col-lg-6">
                    <img alt="services-img" src={dentist}/>
                </div>
                <div className="col-lg-6 services-right-side">
                    <h2>Encuentra Con Nosotros <br/>Lo Que Estas Buscando</h2>
                    <p>scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="services-card-container">
                            <div className="services-card">
                            <i class="fa-solid fa-teeth"></i>
                                <div className="ps-3">
                                    <p className="mb-0"><strong>Limpieza dental</strong></p>
                                    <p>Hacemos las mejores limpiezas dentales para que tu salud dentsl no se recienta</p>
                                </div>
                            </div>
                            <div className="services-card">
                            <i class="fa-solid fa-teeth"></i>
                                <div className="ps-3">
                                    <p className="mb-0"><strong>Limpieza dental</strong></p>
                                    <p>Hacemos las mejores limpiezas dentales para que tu salud dentsl no se recienta</p>
                                </div>
                            </div>
                            <div className="services-card">
                            <i class="fa-solid fa-teeth"></i>
                                <div className="ps-3">
                                    <p className="mb-0"><strong>Limpieza dental</strong></p>
                                    <p>Hacemos las mejores limpiezas dentales para que tu salud dentsl no se recienta</p>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
    )
}