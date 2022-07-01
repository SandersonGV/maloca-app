import React from "react";
import MalocaInfo from "../malocaInfo";

const Service = () => {

    const maloca = new MalocaInfo();

    function renderItens(items) {
        return items.map((list, index) => {
            return (
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <a className="service-item rounded" href="">
                    <div className="service-icon bg-transparent border rounded p-1">
                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                            <i className={list.icone+" fa-2x text-primary"}></i>
                        </div>
                    </div>
                    <h5 className="mb-3">{list.nome}</h5>
                    <p className="text-body mb-0">{list.descricao}</p>
                </a>
            </div>
            )
        })
    };

    return (
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title text-center text-primary text-uppercase">Nossos Serviços</h6>
                <h1 className="mb-5">Conheça os <span className="text-primary text-uppercase">Serviços</span> que oferecemos</h1>
            </div>
            <div className="row g-4">
                {renderItens(maloca.servicos)}
                
            </div>
        </div>
    </div>
    )
}
export default Service;