import React from "react";

const Projects = (props) => {

    function renderProjects(projetos) {
        return projetos.map(list => {
            return <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                        <img className="img-fluid" src={list.img} alt="" />
                        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{list.tipo}</small>
                    </div>
                    <div className="p-4 mt-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{list.nome}</h5>
                            <div className="ps-2">
                                {renderComplex(list.complexidade)}
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <small className="border-end me-3 pe-3"><i className="fas fa-user-friends text-primary me-2"></i>{list.jogadores}</small>
                            <small className="border-end me-3 pe-3"><i className="fas fa-clock text-primary me-2"></i>{list.tempo}</small>
                            <small><i className="fas fa-user-plus text-primary me-2"></i>{list.idade}</small>
                        </div>
                        <p className="text-body mb-3">{list.frase}</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">ver mais</a>
                        </div>
                    </div>
                </div>
            </div>
        })
    };

    function renderComplex(i) {
        return Array(i).fill().map(_=> {
            return <small className="fa fa-star text-primary"></small>
        })
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Nossos Projetos</h6>
                    <h1 className="mb-5">Conheça nossos <span className="text-primary text-uppercase">Projetos</span></h1>
                </div>
                <div className="row g-4">
                    {renderProjects(props.projetos)}

                </div>
            </div>
        </div>
    )
}
export default Projects;