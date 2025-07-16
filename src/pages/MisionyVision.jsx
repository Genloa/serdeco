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
          }}
        >
          <div className="text-center text-white mt-5">
            <h4 className="mb-5 fs-2">Mision</h4>
            <p className="fs-5 m-5 pb-1">
              Proveer soluciones innovadoras y servicios de gestión comercial a
              organizaciones públicas y privadas, para satisfacer a los clientes
              en términos de accesibilidad, confianza y seguridad, además de ser
              rentable y generadora de valor agregado, apoyados en una
              infraestructura comercial tecnológica de avanzada y con un equipo
              humano comprometido.
            </p>
          </div>
          <div
            style={{
              bottom: "0",
              //transform: "translateX(-10%)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={ciudad}
              alt="Ciudad"
              className="img-fluid"
              style={{ width: "50%", height: "10%" }}
            />
            <img
              src={ciudad}
              alt="Ciudad"
              className="img-fluid"
              style={{ width: "50%", height: "10%" }}
            />
            <img
              src={ciudad}
              alt="Ciudad"
              className="img-fluid"
              style={{ width: "50%", height: "10%" }}
            />
          </div>
        </div>

        <div
          className="col mb-4 position-relative"
          style={{ backgroundColor: "#FFD600" }}
        >
          <div className="text-center mt-5">
            <h4 className="mb-5 fs-2">Vision</h4>
            <p className="fs-5 m-5 p-3">
              Ser reconocidos por la confiabilidad y eficacia en la prestación
              de multiservicios de gestión comercial, facturación y recaudación,
              a nivel nacional, ofreciendo soluciones oportunas y precisas para
              satisfacer las necesidades de los usuarios finales del servicio.
            </p>
          </div>

          <div
            className="col"
            style={{
              bottom: "0",
              transform: "translateX(-1%)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={cuiudad2}
              alt="Ciudad"
              className="img-fluid"
              style={{ width: "50%", height: "10%" }}
            />
            <img
              src={cuiudad2}
              alt="Ciudad"
              className="img-fluid"
              style={{ width: "50%", height: "10%" }}
            />
            <img
              src={cuiudad2}
              alt="Ciudad"
              className="img-fluid"
              style={{ width: "50%", height: "10%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
