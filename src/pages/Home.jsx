import React from "react";
import Dash from "../components/layouts/Dash";
import "../assets/css/Home.css";
import carrusel1 from "../assets/img/1.png";
import carrusel2 from "../assets/img/2.png";
import somos from "../assets/img/somos.png";
import testimonio1 from "../assets/img/testimonio1.png";
import testimonio2 from "../assets/img/testimonio2.png";
import testimonio3 from "../assets/img/testimonio3.png";
function Home() {
  return (
    <>
      <Dash></Dash>
      <div>
        <div>
          <Carrusel></Carrusel>
        </div>
        <div className="m-5">
          <Somos></Somos>
        </div>
        <div className="m-5">
          <Testimonios></Testimonios>
        </div>
      </div>
    </>
  );
}

function Carrusel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000" // <-- Añade este atributo
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carrusel1} className="d-block w-100" alt="..." />
        </div>

        <div className="carousel-item">
          <img src={carrusel2} className="d-block w-100" alt="..." />
        </div>

        <div className="carousel-item">
          <img
            src="src\assets\img\imagen4g.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function Somos() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            src={somos}
            alt="Servicios"
            className="img-fluid  top-50 start-50"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-success fw-bold">Serdeco</h2>
          <p>Juntos por una ciudad limpia!</p>
          <h2 className="text-success fw-bold">¿Quiénes somos?</h2>
          <p>
            Líderes en la gestión comercial, facturación y recaudación de
            servicios de aseo urbano y relleno sanitario, comprometidos con la
            sostenibilidad y la mejora continua de la calidad de vida en las
            ciudades
          </p>
          <h2 className="text-success fw-bold">¿Qué hacemos?</h2>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <i className="bi bi-file-earmark-text me-2 text-success"></i>
              Facturación oportuna.
            </li>
            <li>
              <i className="bi bi-shield-check me-2 text-success"></i>
              Garantizamos accesibilidad, confianza y seguridad.
            </li>
            <li>
              <i className="bi bi-lightbulb me-2 text-success"></i>
              Brindamos soluciones innovadoras para satisfacer las necesidades
              de nuestros usuarios.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Testimonios() {
  return (
    <div className="container">
      <h2 className="text-center text-success fs-1 mt-5 mb-5">Testimonios</h2>
      <div className="row">
        <div className="col-md-4 ">
          <div className="text-center">
            <img src={testimonio1} className="img-fluid rounded-circle" />
          </div>
          <h1> Usuario Satisfecho</h1>
          <p>"Excelente servicio, siempre puntuales y amables."</p>
        </div>
        <div className="col-md-4">
          <img src={testimonio2} className="img-fluid rounded-circle" />
          <h1> Usuario Satisfecho</h1>
          <p>"La mejor empresa de aseo que he conocido."</p>
        </div>
        <div className="col-md-4">
          <img src={testimonio3} className="img-fluid rounded-circle" />
          <h1> Usuario Satisfecho</h1>
          <p>"Muy profesionales y comprometidos con el medio ambiente."</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
