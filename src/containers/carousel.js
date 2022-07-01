import React from "react";

const Carousel = (props) => {
    
    function renderItens(projetos){
        return projetos.map((list,index)=>{
            return  <div className={"carousel-item "+(index==0?"active":"")}>
                        <img className="w-100" src={list.img}  />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" >
                                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">{list.nome}</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">{list.frase}</h1>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Nossos Projetos</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Conheça este Projeto</a>
                            </div>
                        </div>
                    </div>
        })
    };

    return(
        <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {renderItens(props.destaques)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Proximo</span>
            </button>
        </div>
    </div>
    )
}
export default Carousel;