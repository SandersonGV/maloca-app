import React from "react";
import MalocaInfo from "../malocaInfo";
import { Link } from "react-router-dom";

const Header = () => {
 
    const maloca = new MalocaInfo(); 

    function renderSSocialMedias(){
        return maloca.social.map(list=>{
            return <a className="me-3" href={list.url}><i className={list.icone}></i></a>
        })
    };

    return(
        <div className="container-fluid bg-dark px-0">
            <div className="row gx-0">
                <div className="col-lg-3 bg-dark d-none d-lg-block">
                <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <img src="img/logo.png" width={"60%"}></img>
                </Link>
                </div>
                <div className="col-lg-9">
                    <div className="row gx-0 bg-white d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i className="fa fa-envelope text-primary me-2"></i>
                                <p className="mb-0">{maloca.email}</p>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-2">
                                <i className="fa fa-phone-alt text-primary me-2"></i>
                                <p className="mb-0">{maloca.telefone}</p>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="d-inline-flex align-items-center py-2">
                                {renderSSocialMedias()}
                               
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <Link to="/" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 text-primary text-uppercase">{maloca.titulo}</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Inicio</Link>
                                <Link to="about" className="nav-item nav-link">Sobre</Link>
                                <Link to="service" className="nav-item nav-link">Serviços</Link>
                                <Link to="project" className="nav-item nav-link">Projetos</Link>
                                <Link to="contact" className="nav-item nav-link">Contato</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Header;