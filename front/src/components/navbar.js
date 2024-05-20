import React from "react"
import LOGO from "../img/dentistlogo.png"
import "../styles/navbar.css"


export const Navbar = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid d-flex justify-content-between">
                <a class="navbar-brand" href="/"><img alt="logo" src={LOGO}/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Encuentranos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary rounded-pill col-md-12 col-lg-2 col-12">Agendar Cita</button>
                </div>
            </div>
        </nav>
    )
}