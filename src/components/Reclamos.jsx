import { useEffect, useState } from "react";
import ciudad from "../assets/img/ciudadverde.svg";
import FormReclamo from "./FormReclamo";
import logo from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";
export default function Reclamos() {
  const [oficinas, setOficinas] = useState([]);
  const endpoint = "http://serdeco.com.ve:3002/api";

  const defaultValues = {
    nombre: "",
    apellido: "",
    cuenta: "",
    cedula: "",
    tipoCedula: "",
    correo: "",
    telefono: "",
    mensaje: "",
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${endpoint}/getOficinas`);
      const data = await response.json();

      // Estados únicos
      const estadosUnicos = [];
      const seenEstados = new Set();
      data.forEach((item) => {
        const estadoLimpio = item.estado ? item.estado.trim() : "";
        if (estadoLimpio && !seenEstados.has(estadoLimpio)) {
          seenEstados.add(estadoLimpio);
          estadosUnicos.push({ value: estadoLimpio, label: estadoLimpio });
        }
      });

      const oficinaLimpia = data.find((oficina) => oficina.id === 1);

      const oficinaConEstadoLimpio = oficinaLimpia
        ? {
            ...oficinaLimpia,
            estado: oficinaLimpia.estado ? oficinaLimpia.estado.trim() : "",
          }
        : null;

      setOficinas(oficinaConEstadoLimpio);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSubmit = async (data, reset) => {
    try {
      const response = await fetch(`${endpoint}/createReclamo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert("Reclamo enviado con éxito. Número de reclamo: " + result.id);
      reset();
    } catch (error) {
      console.error("Error enviando datos:", error);
    }
  };

  return (
    <div className="row flex-column flex-lg-row">
      {/* Columna izquierda */}
      <div
        className="col-12 col-lg text-white border rounded-start-5 px-4 py-4"
        style={{
          backgroundColor: "#1c5e32",
          borderRight: "12px solid #FFD600",
          backgroundImage: `url(${ciudad})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
          <img
            src={logo}
            alt="Logo 1"
            className="img-fluid"
            style={{ height: "35px" }}
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="img-fluid"
            style={{ height: "25px" }}
          />
        </div>

        <h3 className="display-6 text-center mb-4">Contáctanos:</h3>
        <ul className="list-group list-group-flush text-start mb-4">
          <li className="list-group-item list-group-item-success">
            <strong>Teléfono:</strong> {oficinas.telefono}
          </li>
          <li className="list-group-item list-group-item-success">
            <strong>Correo Electrónico: </strong>
            {oficinas.correo}
          </li>
          <li className="list-group-item list-group-item-success">
            <strong>Dirección Sede Principal:</strong> {oficinas.estado},{" "}
            {oficinas.direccion}
          </li>
        </ul>
      </div>

      {/* Columna derecha */}
      <div className="col-12 col-lg px-4 py-4">
        <h4 className="text-center mb-4">
          Puedes ingresar tu inquietud a través del siguiente formulario:
        </h4>
        <FormReclamo onSubmit={onSubmit} defaultValues={defaultValues} />
      </div>
    </div>
  );
}
