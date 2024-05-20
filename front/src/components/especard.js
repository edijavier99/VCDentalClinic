import React from "react";
import "../styles/especard.css"

export const EspeCard = (props) =>{
    return(
        <article id="especard-container" className="col-10 col-md-11 col-lg-3">
            <div className="bg-primary icon-board">
            <i class={`fa-solid ${props.icon}`}></i>
            </div>
            <div className="">
                <p className="pt-3"><strong>{props.title}</strong></p>
                <p className="text-muted">{props.description}</p>
            </div>
        </article>
    )
}