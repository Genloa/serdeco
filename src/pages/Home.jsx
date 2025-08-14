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
import Somos from "../pages/Somos";

import Valores from "./Valores";

import CarruselOperadoras from "./CarruselOperadoras";
import MapaOperadoras from "./MapaOperadoras";
import AtencionCliente from "./AntencionCliente";
import Footer from "./Footer";
import { OpcionProvider } from "../components/OpcionContext";
import ServiciosAtencion from "./ServiciosAtencion";
import ScrollToHash from "../components/ScrollToHash";
import Noticias from "./Noticias";

function Home() {
  return (
    <OpcionProvider>
      <ScrollToHash />
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
      <CarruselOperadoras />
      <div className="container-fluid my-5">
        <Somos />
        <Historia />
        <Valores />
        <ServiciosAtencion />
        <MisionyVision />
        <MapaOperadoras />
        <AtencionCliente />
        <Noticias />
        <Footer />
      </div>
    </OpcionProvider>
  );
}

export default Home;
