import React from "react"
import "../styles/reviews.css"

export const Reviews = () =>{
    return(
        <section id="reviews-container">
            <h2>¿Qué dicen nuestros <br/> clientes de nosotros?</h2>
            <div className="row col-10 mx-auto d-flex justify-content-around mt-5 reviews-container-inner">
                <article className="col-md-10 review-card">
                    <div className="d-flex justify-content-between">
                        <i class="fa-solid fa-quote-left"></i>
                        <div className="">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <p className="py-3">scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="client-review-container d-flex ">
                        <div className="client-review-container-img">
                            <img alt="client-img" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="ps-3">
                            <p className="mb-0"><strong>Maribel Asis</strong></p>
                            <p className="text-muted mb-0">Pacient</p>
                        </div>
                    </div>
                </article>
                <article className="col-10 col-md-10 review-card">
                    <div className="d-flex justify-content-between">
                        <i class="fa-solid fa-quote-left"></i>
                        <div className="">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <p className="py-3">scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="client-review-container d-flex ">
                        <div className="client-review-container-img">
                            <img alt="client-img" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                        <div className="ps-3">
                            <p className="mb-0"><strong>Maribel Asis</strong></p>
                            <p className="text-muted mb-0">Pacient</p>
                        </div>
                    </div>
                </article>
            </div>      
        </section>
    )
}