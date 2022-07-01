import React from "react";
import MalocaInfo from "../malocaInfo";

const About = () => {
    
    const maloca = new MalocaInfo(); 

    function renderSocialMedias(){
        return maloca.social.map(list=>{
            return <a className="btn btn-outline-light btn-social" href=""><i className={list.icone}></i></a>
        })
    };

    return(
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <h6 className="section-title text-start text-primary text-uppercase">Sobre nós</h6>
                    <h1 className="mb-4">Bem vindos à <span className="text-primary text-uppercase">{maloca.titulo}</span></h1>
                    <p className="mb-4">{maloca.frase}</p>
                    <div className="row g-3 pb-4">
                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="border rounded p-1">
                                <div className="border rounded text-center p-4">
                                    <i className="far fa-object-group fa-2x text-primary mb-2"></i>
                                    <h2 className="mb-1" data-toggle="counter-up">{maloca.projetos.length}</h2>
                                    <p className="mb-0">Projetos</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="border rounded p-1">
                                <div className="border rounded text-center p-4">
                                    <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                    <h2 className="mb-1" data-toggle="counter-up">{maloca.time.length}</h2>
                                    <p className="mb-0">Equipe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="border rounded p-1">
                                <div className="border rounded text-center p-4">
                                    <i className="fas fa-handshake fa-2x text-primary mb-2"></i>
                                    <h2 className="mb-1" data-toggle="counter-up">8</h2>
                                    <p className="mb-0">Parceiros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
                </div>
                <div className="col-lg-6">
                    <div className="row g-3">
                        <div className="col-6 text-end">
                            <img className="img-fluid rounded w-75 wow zoomIn mt-5" data-wow-delay="0.1s" src="img/about-3.png"  />
                        </div>
                        <div className="col-6 text-start">
                            <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.png" />
                        </div>
                        <div className="col-6 text-end">
                            <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-4.png" />
                        </div>
                        <div className="col-6 text-start">
                            <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;