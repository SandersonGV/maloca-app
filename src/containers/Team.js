import React from "react";
import MalocaInfo from "../malocaInfo";

const Team = () => {
    
    const maloca = new MalocaInfo(); 

    function renderTeam(){
        return maloca.time.map(list=>{
            return <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={list.img} alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                {renderSocialMedias(list.social)}
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">{list.nome}</h5>
                                <small>{list.cargo}</small>
                            </div>
                        </div>
                    </div>
        })
    };

    function renderSocialMedias(social){
        return social.map(list=>{
            return <a className="btn btn-square btn-primary mx-1" href=""><i className={list.icone}></i></a>
        })
    };


    return(
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title text-center text-primary text-uppercase">Nosso time</h6>
                    <h1 className="mb-5">Conheça nossa <span className="text-primary text-uppercase">Equipe</span></h1>
                </div>
                <div className="row g-4">
                    {renderTeam()}
                </div>
            </div>
        </div>
    )
}
export default Team;