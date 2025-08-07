import { useEffect, useState } from "react";
import ciudad from "../assets/img/ciudadverde.svg";
import FormReclamo from "../components/FormReclamo";
import logo from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";

export default function AtencionCliente() {
  const [open, setOpen] = useState(false);
  const [openOficina, setOpenOficina] = useState(false);
  const [openReclamo, setOpenReclamo] = useState(false);
  return (
    <div className="container-fluid w-100 pb-5" id="antencioncliente">
      <h2 className="text-center text-success mt-5 mb-5 display-4 fw-bold">
        Atención al Cliente
      </h2>
      <div>
        <div className=" mb-4">
          <div className="text-center text-white mt-5">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                autoComplete="off"
                aria-expanded={open}
                aria-controls="collapsePreguntas"
                checked={open}
                onChange={() => {
                  setOpen((prev) => {
                    const next = !prev;
                    if (next) {
                      setOpenOficina(false);
                      setOpenReclamo(false);
                    }
                    return next;
                  });
                }}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck1">
                Preguntas Frecuentes
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
                aria-expanded={openOficina}
                aria-controls="collapseOficinas"
                checked={openOficina}
                onChange={() => {
                  setOpenOficina((prev) => {
                    const next = !prev;
                    if (next) {
                      setOpen(false);
                      setOpenReclamo(false);
                    }
                    return next;
                  });
                }}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck2">
                Oficinas de Atención
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autoComplete="off"
                aria-expanded={openReclamo}
                aria-controls="collapseReclamos"
                checked={openReclamo}
                onChange={() => {
                  setOpenReclamo((prev) => {
                    const next = !prev;
                    if (next) {
                      setOpen(false);
                      setOpenOficina(false);
                    }
                    return next;
                  });
                }}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck3">
                Contactanos
              </label>
            </div>
          </div>
        </div>
        <div className=" mb-4 position-relative">
          <div className="text-center mt-5">
            <div
              id="collapsePreguntas"
              style={{
                width: open ? "100%" : "0",
                overflow: "hidden",
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-block",
              }}
            >
              <div
                className="card card-body"
                style={{
                  width: open ? "100%" : "0",
                  padding: open ? "1rem" : "0",
                  minWidth: 0,
                  minHeight: 0,
                }}
              >
                {open && <PreguntasFrecuentes />}
              </div>
            </div>

            <div
              id="collapseOficinas"
              style={{
                width: openOficina ? "100%" : "0",
                overflow: "hidden",
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-block",
              }}
            >
              <div
                className="card card-body"
                style={{
                  width: openOficina ? "100%" : "0",
                  padding: openOficina ? "1rem" : "0",
                  minWidth: 0,
                  minHeight: 0,
                }}
              >
                {openOficina && <OficinasAtencion />}
              </div>
            </div>

            <div
              id="collapseReclamos"
              style={{
                width: openReclamo ? "100%" : "0",
                overflow: "hidden",
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-block",
              }}
            >
              <div
                className="border border-success rounded-4"
                style={{
                  width: openReclamo ? "100%" : "0",
                  padding: openReclamo ? "0" : "0",
                  minWidth: 0,
                  minHeight: 0,
                }}
              >
                {openReclamo && <Reclamos />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreguntasFrecuentes() {
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              pregunta #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">cuerpo</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              pregunta #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">cuerpo</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              pregunta #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">cuerpo</div>
          </div>
        </div>
      </div>
    </>
  );
}

function OficinasAtencion() {
  const [estados, setEstados] = useState([]);
  const [oficinas, setOficinas] = useState([]);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null);
  const [oficinasFiltradas, setOficinasFiltradas] = useState([]);
  const endpoint = "http://localhost:3002/api";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${endpoint}/getOficinas`);
      const data = await response.json();
      console.log(data);
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

      setEstados(estadosUnicos);
      console.log(estadosUnicos);
      // Guardar también los estados limpios en las oficinas
      const oficinasLimpias = data.map((oficina) => ({
        ...oficina,
        estado: oficina.estado ? oficina.estado.trim() : "",
      }));
      setOficinas(oficinasLimpias);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (estadoSeleccionado) {
      setOficinasFiltradas(
        oficinas.filter(
          (oficina) => oficina.estado.trim() === estadoSeleccionado.value.trim()
        )
      );
    } else {
      setOficinasFiltradas([]);
    }
  }, [estadoSeleccionado, oficinas]);

  return (
    <>
      <div className="col-4 mx-auto">
        <div>
          <select
            className="form-select"
            id="estado"
            value={estadoSeleccionado ? estadoSeleccionado.value : ""}
            onChange={(e) => {
              const value = e.target.value;
              const estado = estados.find((est) => est.value === value);
              setEstadoSeleccionado(estado || null);
            }}
          >
            <option value="">Seleccionar Estado</option>
            {estados.map((estado) => (
              <option key={estado.value} value={estado.value}>
                {estado.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {estadoSeleccionado && (
        <div className=" text-start mt-4">
          <h5>Oficinas en {estadoSeleccionado.label}:</h5>
          {oficinasFiltradas.length > 0 ? (
            <ul className="list-group">
              {oficinasFiltradas.map((oficina) => (
                <li key={oficina.id} className="list-group-item">
                  <strong>{oficina.nombre}</strong>
                  <br />
                  <span>{oficina.municipio}</span>
                  <br />
                  <span>{oficina.direccion}</span>
                  <br />
                  {oficina.telefono && (
                    <span>
                      <b>Tel:</b> {oficina.telefono}
                    </span>
                  )}
                  <br />
                  {oficina.correo && (
                    <span>
                      <b>Email:</b> {oficina.correo}
                    </span>
                  )}
                  <br />
                  {oficina.horario && (
                    <span>
                      <b>Horario:</b> {oficina.horario}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="alert alert-info mt-2">
              No hay oficinas para este estado.
            </div>
          )}
        </div>
      )}
    </>
  );
}

function Reclamos() {
  const endpoint = "http://localhost:3002/api";

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
      console.log("Resultados de la consulta:", result);
      reset();
    } catch (error) {
      console.error("Error enviando datos:", error);
    }
  };
  return (
    <div className="row">
      <div
        className="col text-white rounded-start"
        style={{
          backgroundColor: "#1c5e32",
          borderRight: "12px solid #FFD600",
          backgroundImage: `url(${ciudad})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundSize: "auto 100px",
          paddingBottom: "8%",
        }}
      >
        <div className="d-flex justify-content-center align-items-center mt-4">
          <img src={logo} alt="" width="10%" height="35" />

          <img src={logo2} alt="" width="15%" height="25" />
        </div>
        <h3 className=" display-4 text-center m-5">Contactanos:</h3>
        <ul className="list-group list-group-flush text-start m-5">
          <li className="list-group-item list-group-item-success">
            <strong>Teléfono:</strong> 0212-1234567
          </li>
          <li className="list-group-item  list-group-item-success">
            <strong>Correo Electrónico:</strong>
          </li>
          <li className="list-group-item list-group-item-success">
            <strong>Dirección Física:</strong>
          </li>
        </ul>
      </div>
      <div className="col m-5">
        <h3 className="text-center m-5">
          Puedes ingresar tu inquietud atraves del siguiente formulario:
        </h3>
        <FormReclamo onSubmit={onSubmit} defaultValues={defaultValues} />
      </div>
    </div>
  );
}
