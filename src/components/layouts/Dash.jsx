import React from "react";

function Dash() {
    return (
        <>
           <Navbar></Navbar> 
           
        </>

    )
}

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="src\assets\img\logo.png" alt="" width="150" height="30"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Quienes Somos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Historia</a></li>
                                    <li><a className="dropdown-item" href="#">Misión Y Visión</a></li>
                                    <li><a className="dropdown-item" href="#">Valores</a></li>
                                </ul>
                               
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Atención al Cliente
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Preguntas Frecuentes</a></li>
                                    <li><a className="dropdown-item" href="#">Oficinas de Atención</a></li>
                                    <li><a className="dropdown-item" href="#">Reclamo</a></li>
                                </ul>
                               
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link" href="#">Mapa de Cobertura</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link" href="#">Noticias</a>
                            </li>
                        </ul>
                    </div>
                    <button  type="button" class="btn text-light fw-bold" style={{background: '#8FC642'}} >Contactanos</button>
                </div>
        </nav>
    )
}
export default Dash