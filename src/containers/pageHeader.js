import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
    backgroundImage: 'url(img/fundopageheader.png)',
  };

const pageHeader = (props) => {
    return(
        <div class="container-fluid page-header p-0" style={divStyle}>
            <div class="container-fluid page-header-inner pt-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">{props.pageName}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><Link to='/'>Inicio</Link></li>
                            <li class="breadcrumb-item"><a href="#">Paginas</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">{props.pageName}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default pageHeader;