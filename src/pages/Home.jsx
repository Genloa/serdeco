 import React from "react";
import Dash from "../components/layouts/Dash";
import '../assets/css/Home.css';
function Home(){
    return (
        <>
            <Dash></Dash>
            <div>
              
              <div>
              <Carrusel></Carrusel>
              </div>
              
              <div>
                <h1>Descripcion de la empresa</h1>
              </div>
              
            </div>
        </>
    );
}

function Carrusel(){
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
              
        <div className="carousel-inner">
                
          <div className="carousel-item active">
            <img src="src\assets\img\imagen4g.jpg" className="d-block w-100" alt="..."/>
          </div>

          <div className="carousel-item">
            <img src="src\assets\img\imagen4g.jpg" className="d-block w-100" alt="..."/>
          </div>

          <div className="carousel-item">
            <img src="src\assets\img\imagen4g.jpg" className="d-block w-100" alt="..."/>
          </div>

        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    )
}
export default Home;