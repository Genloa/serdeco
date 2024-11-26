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
                <Servicios></Servicios>
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

function Servicios(){
    return (
      <nav className="direc bg-body-tertiary">
        <div className="container-fluid">
        <div className="direc-brand" href="#">
          <p className="custom-paragraph">
          Serdeco, una filial clave de la Corporación Eléctrica Nacional (CORPOELEC), desempeña un rol fundamental en la gestión de la facturación y recaudación del servicio eléctrico en Venezuela. Con una trayectoria que se remonta a su fundación en 1986 y su incorporación al gobierno en 2007, Serdeco se ha consolidado como el brazo operativo que garantiza la eficiencia en los procesos de facturación para CORPOELEC, así como para los servicios municipales de aseo y relleno sanitario. Su cobertura abarca un espectro amplio, trabajando estrechamente con alcaldías y gobernaciones para asegurar que los ciudadanos reciban y gestionen sus pagos de manera efectiva. La misión de Serdeco es optimizar estos servicios, asegurando no solo la recolección de pagos, sino también el mantenimiento de la infraestructura crítica que soporta el suministro eléctrico y los servicios de saneamiento, contribuyendo así al bienestar y la calidad de vida de la población venezolana.
          </p>

          <img src="src\assets\img\mision.jpg" alt="Logo" width="500" height="300" className="d-inline-block align-text-top"/>
        </div>

        
        </div>
      </nav>

      
    )
}

export default Home;