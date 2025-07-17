import ciudad from "../assets/img/ciudadverde.svg";
import {
  faHandHoldingHeart,
  faHandshake,
  faPeopleCarryBox,
  faScaleBalanced,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const valores = [
  {
    titulo: "Honestidad",
    descripcion:
      "Actuamos de manera transparente y útil con nuestros clientes y nos respetamos internamente como miembros de la familia SERDECO.",
    icono: faHandHoldingHeart,
  },
  {
    titulo: "Responsabilidad",
    descripcion:
      "Cumplimos con nuestras obligaciones, siendo eficientes en la gestión organizativa y en la rendición de cuentas con nuestros usuarios.",
    icono: faUsersGear,
  },
  {
    titulo: "Compromiso",
    descripcion:
      "Desempeñamos nuestras actividades de manera clara, llevando adelante la tarea encomendada de responder a tiempo las solicitudes de nuestros clientes.",
    icono: faHandshake,
  },
  {
    titulo: "Trabajo en Equipo",
    descripcion:
      "Cooperamos para lograr que se alcancen los objetivos para lo cual fue creada SERDECO, compartiendo ideas, técnicas y procedimientos, establecidos en nuestra misión.",
    icono: faPeopleCarryBox,
  },
  {
    titulo: "Ética",
    descripcion:
      "Ejecutamos el trabajo resguardando la confidencialidad de la información, para lograr credibilidad en los clientes, respetando los valores y principios establecidos en el Código de Ética ",
    icono: faScaleBalanced,
  },
];

export default function Valores() {
  return (
    <section
      id="Valores"
      className="container-fluid w-100"
      style={{
        backgroundColor: "#1c5e32",

        backgroundImage: `url(${ciudad})`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "bottom",
        backgroundSize: "auto 100px",
        padding: "1% 1% 6% 1%",
      }}
    >
      <div className="row justify-content-center">
        <div className="col col-sm-6 col-md-4 col-lg-3 text-white mt-5 ms-4">
          <h2 className="display-3 fw-bold mb-5 pt-5">Nuestros Valores</h2>
        </div>
        {valores.map((valor, index) => (
          <div
            key={index}
            className="col col-sm-6 col-md-4 col-lg-3 m-2 p-2"
            style={{ background: "#144725", borderRadius: "12px" }}
          >
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={valor.icono}
                className="display-2 text-warning"
              />
            </div>
            <h5 className="text-white fw-bold text-center">{valor.titulo}</h5>
            <p className="text-white  text-center">{valor.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
