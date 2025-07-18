//import React from "react";

import "../assets/css/Home.css";
import carrusel1 from "../assets/img/carrusel1.jpg";
import carrusel2 from "../assets/img/carrusel2.jpeg";
import carrusel3 from "../assets/img/carrusel3.jpg";
import Carrusel from "../components/Carrusel";
import Contacto from "../components/Contacto";
import ItemCarrusel from "../components/ItemCarrusel";
import Modalinicio from "../components/Modalinicio";
import Navbar from "../components/Navbar";
import Historia from "./Historia";
import MisionyVision from "./MisionyVision";
import Somos from "./somos";
import Testimonios from "./Testimonios";
import Valores from "./Valores";
import operadora1 from "../assets/img/operadorasLogos/operadora1.png";
import operadora2 from "../assets/img/operadorasLogos/operadora2.png";
import operadora3 from "../assets/img/operadorasLogos/operadora3.png";
import operadora4 from "../assets/img/operadorasLogos/operadora4.png";
import operadora5 from "../assets/img/operadorasLogos/operadora5.png";
import operadora6 from "../assets/img/operadorasLogos/operadora6.png";
import operadora7 from "../assets/img/operadorasLogos/operadora7.png";
import CarruselOperadoras from "./CarruselOperadoras";

function Home() {
  const operadoras = [
    operadora1,
    operadora2,
    operadora3,
    operadora4,
    operadora5,
    operadora6,
    operadora7,
  ];
  return (
    <>
      <Contacto />
      <Modalinicio />
      <Navbar />

      <Carrusel
        carruselItems={[
          <ItemCarrusel
            key="carrusel-item-1"
            welcomeText="Bienvenidos a Serdeco:"
            mainHeading="Líderes en facturación de aseo urbano y relleno sanitario."
            subtitle="Transformamos la gestión comercial en soluciones confiables, accesibles y sostenibles para tu ciudad."
            imageUrl={carrusel1}
            imageAlt=""
          />,
          <ItemCarrusel
            key="carrusel-item-2"
            welcomeText="Aseo"
            mainHeading="Facturación transparente"
            subtitle="Comprometidos con la gestión responsable del aseo urbano."
            imageUrl={carrusel2}
            imageAlt=""
          />,
          <ItemCarrusel
            key="carrusel-item-2"
            welcomeText="Relleno Sanitario"
            mainHeading="Al servicio de tu ciudad"
            subtitle="Soluciones sostenibles para una gestión responsable de residuos."
            imageUrl={carrusel3}
            imageAlt=""
          />,
        ]}
      />
      <CarruselOperadoras logos={operadoras} />
      <div className="container-fluid my-5">
        <Somos />
        <Historia />
        <Valores />
        <Testimonios />
        <MisionyVision />
      </div>
    </>
  );
}

export default Home;
