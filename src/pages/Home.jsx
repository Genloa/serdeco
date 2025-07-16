//import React from "react";

import "../assets/css/Home.css";
import carrusel1 from "../assets/img/carrusel1.jpg";
import carrusel2 from "../assets/img/carrusel2.jpeg";
import carrusel3 from "../assets/img/carrusel3.jpg";
import Carrusel from "../components/Carrusel";
import ItemCarrusel from "../components/ItemCarrusel";
import Navbar from "../components/Navbar";
import MisionyVision from "./MisionyVision";
import Somos from "./somos";
import Testimonios from "./Testimonios";

function Home() {
  return (
    <>
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
      <div className="container-fluid my-5">
        <Somos />
        <Testimonios />
        <MisionyVision />
      </div>
    </>
  );
}

export default Home;
