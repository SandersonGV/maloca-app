import React from "react";
import MalocaInfo from "../malocaInfo";




const Footer = () => {
    
    const maloca = new MalocaInfo(); 

    function renderServices(){
        return maloca.servicos.map(list=>{
            return <a className="btn btn-link" href="">{list.nome}</a>
        })
    };

    function renderSSocialMedias(){
        return maloca.social.map(list=>{
            return <a className="btn btn-outline-light btn-social" href=""><i className={list.icone}></i></a>
        })
    };


    return(
        <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container pb-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="bg-primary rounded p-4">
                            <a href="index.html"><h1 className="text-white text-uppercase mb-3">{maloca.titulo}</h1></a>
                            <p className="text-white mb-0">
                                { maloca.frase }
							</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Contato</h6>
                        <p className="mb-2 text-start"><i className="fa fa-map-marker-alt me-3"></i>{maloca.endereco}</p>
                        <p className="mb-2 text-start"><i className="fa fa-phone-alt me-3"></i>{maloca.telefone}</p>
                        <p className="mb-2 text-start"><i className="fa fa-envelope me-3"></i>{maloca.email}</p>
                        <div className="d-flex pt-2">
                        { renderSSocialMedias() }
                           </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row gy-5 g-4">
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Empresa</h6>
                                <a className="btn btn-link" href="">Sobre nós</a>
                                <a className="btn btn-link" href="">Entre em contato</a>
                            </div>
                            <div className="col-md-6">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Serviços</h6>
                                { renderServices() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Inicio</a>
                                <a href="">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;