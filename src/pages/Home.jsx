//import React from "react";

import "../assets/css/Home.css";
import carrusel1 from "../assets/img/1.png";
import carrusel2 from "../assets/img/2.png";
import carrusel3 from "../assets/img/imagen4g.jpg";
import somos from "../assets/img/somos.png";
import testimonio1 from "../assets/img/testimonio1.png";
import testimonio2 from "../assets/img/testimonio2.png";
import testimonio3 from "../assets/img/testimonio3.png";
import Carrusel from "../components/Carrusel";
import ItemCarrusel from "../components/ItemCarrusel";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <Carrusel
        carruselItems={[
          <ItemCarrusel
            key="carrusel-item-1"
            welcomeText="Bienvenido"
            mainHeading="Web Hosting Service"
            subtitle="Reliable, Secure, and Scalable Hosting Solutions"
            imageUrl={testimonio1}
            imageAlt="Team working together"
          />,
          <ItemCarrusel
            key="carrusel-item-2"
            welcomeText="aseo"
            mainHeading="Web Hosting Service"
            subtitle="Reliable, Secure, and Scalable Hosting Solutions"
            imageUrl={testimonio2}
            imageAlt="Team working together"
          />,
        ]}
      />
      <div className="container my-5">
        <Somos />
        <Testimonios />
      </div>
    </>
  );
}

function Somos() {
  return (
    <div className="row align-items-center mb-5">
      <div className="col-md-5">
        <img src={somos} alt="Imagen sobre Serdeco" className="img-fluid" />
      </div>
      <div className="col-md-7">
        <h2 className="text-success fw-bold">Serdeco</h2>
        <p>¡Juntos por una ciudad limpia!</p>
        <h2 className="text-success fw-bold">¿Quiénes somos?</h2>
        <p>
          Líderes en la gestión comercial, facturación y recaudación de
          servicios de aseo urbano y relleno sanitario, comprometidos con la
          sostenibilidad y la mejora continua de la calidad de vida en las
          ciudades.
        </p>
        <h2 className="text-success fw-bold">¿Qué hacemos?</h2>
        <ul className="list-unstyled">
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
            Brindamos soluciones innovadoras para satisfacer las necesidades de
            nuestros usuarios.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Testimonios() {
  const testimonios = [
    {
      img: testimonio1,
      alt: "Usuario Satisfecho 1",
      texto: "Excelente servicio, siempre puntuales y amables.",
    },
    {
      img: testimonio2,
      alt: "Usuario Satisfecho 2",
      texto: "La mejor empresa de aseo que he conocido.",
    },
    {
      img: testimonio3,
      alt: "Usuario Satisfecho 3",
      texto: "Muy profesionales y comprometidos con el medio ambiente.",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center text-success fs-1 mt-5 mb-5">Testimonios</h2>
      <div className="row">
        {testimonios.map((t, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="text-center">
              <img
                src={t.img}
                className="img-fluid rounded-circle mb-3"
                style={{ width: "200px", height: "200px" }}
                alt={t.alt}
              />
              <h4>Usuario Satisfecho</h4>
              <p>{t.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
