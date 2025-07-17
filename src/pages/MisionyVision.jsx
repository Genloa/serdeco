import ciudad from "../assets/img/ciudadverde.svg";
import cuiudad2 from "../assets/img/ciudadamarillo.svg";

export default function MisionyVision() {
  return (
    <div className="container-fluid w-100 " id="misionyvision">
      <div className="row">
        <div
          className="col mb-4"
          style={{
            backgroundColor: "#1c5e32",
            borderRight: "12px solid #8fc63f",
            backgroundImage: `url(${ciudad})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "auto 100px",
            paddingBottom: "8%",
          }}
        >
          <div className="text-center text-white mt-5">
            <h4 className="display-4 mb-5  fw-bold">Mision</h4>
            <p className="fs-5 m-5 pb-1">
              Proveer soluciones innovadoras y servicios de gestión comercial a
              organizaciones públicas y privadas, para satisfacer a los clientes
              en términos de accesibilidad, confianza y seguridad, además de ser
              rentable y generadora de valor agregado, apoyados en una
              infraestructura comercial tecnológica de avanzada y con un equipo
              humano comprometido.
            </p>
          </div>
        </div>

        <div
          className="col mb-4 position-relative"
          style={{
            backgroundColor: "#FFD600",
            borderRight: "12px solid #8fc63f",
            backgroundImage: `url(${cuiudad2})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "auto 100px",
            paddingBottom: "8%",
          }}
        >
          <div className="text-center mt-5">
            <h4 className="display-4 mb-5  fw-bold">Vision</h4>
            <p className="fs-5 m-5 p-3">
              Ser reconocidos por la confiabilidad y eficacia en la prestación
              de multiservicios de gestión comercial, facturación y recaudación,
              a nivel nacional, ofreciendo soluciones oportunas y precisas para
              satisfacer las necesidades de los usuarios finales del servicio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
