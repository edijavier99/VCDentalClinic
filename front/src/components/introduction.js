import React from "react";
import "../styles/introduction.css"
import dentista from "../img/mejorada.png"

export const  Introduction = () =>{
    return(
        <section id="intro-board" className="d-flex">
            <div className="row intro-board-row mx-0 px-0">
                <div className="col-md-6 ps-5  intro-left-side d-flex flex-column justify-content-center">
                    <h1>Consulta Tus Problemas Dentales Con Nosotros</h1>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <button className="btn btn-primary rounded-pill col-3 mt-3">Agendar cita</button>
                    <div className="small-description-tooth d-flex">
                        <div className="rounded-circle bg-primary tooth-board"><i class="fa-solid fa-tooth"></i></div> 
                        <p className="mb-0 ps-3">Somos capaces de restablecer la <span className="small-detail">salud dental de tu diente</span></p>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center right-side justify-content-center">
                   <img src={dentista} />
                   
                    {/* <div className="img-board">
                        <img alt="dentista" src={dentista} />
                    </div>
                    <div className="apointment-mini-dashboard">
                        <h6>Citas Disponibles</h6>
                        <p className="small">Selecione Citas</p>
                        <div className="small-apointment">
                            <img alt="small-image" src="https://static.vecteezy.com/system/resources/previews/005/495/317/non_2x/dental-clinic-logo-template-dental-care-logo-designs-tooth-teeth-smile-dentist-logo-vector.jpg" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
} 