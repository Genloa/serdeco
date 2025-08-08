import { useEffect, useState } from "react";
import ciudad from "../assets/img/ciudadverde.svg";
import FormReclamo from "../components/FormReclamo";
import logo from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";
import FormUsuarioBuscar from "../components/FormBuscarUsuario";

export default function AtencionCliente() {
  const [open, setOpen] = useState(false);
  const [openOficina, setOpenOficina] = useState(false);
  const [openReclamo, setOpenReclamo] = useState(false);
  const [openConsultaDeuda, setOpenConsultaDeuda] = useState(false);
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
                      setOpenConsultaDeuda(false);
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
                      setOpenConsultaDeuda(false);
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
                      setOpenConsultaDeuda(false);
                    }
                    return next;
                  });
                }}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck3">
                Contactanos
              </label>
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck4"
                autoComplete="off"
                aria-expanded={openConsultaDeuda}
                aria-controls="collapseDeuda"
                checked={openConsultaDeuda}
                onChange={() => {
                  setOpenConsultaDeuda((prev) => {
                    const next = !prev;
                    if (next) {
                      setOpen(false);
                      setOpenOficina(false);
                      setOpenReclamo(false);
                    }
                    return next;
                  });
                }}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck4">
                Consulta de Deuda
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
                className="border border-success rounded-4"
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
              id="collapseOficinas "
              style={{
                width: openOficina ? "50%" : "0",
                overflow: "hidden",
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-block",
              }}
            >
              <div
                className="border border-success rounded-4"
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
            <div
              id="collapseDeuda"
              style={{
                width: openConsultaDeuda ? "80%" : "0",
                overflow: "hidden",
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "inline-block",
              }}
            >
              <div
                className="border border-success rounded-4"
                style={{
                  width: openConsultaDeuda ? "100%" : "0",
                  padding: openConsultaDeuda ? "0" : "0",
                  minWidth: 0,
                  minHeight: 0,
                }}
              >
                {openConsultaDeuda && <ConsultaDeuda />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreguntasFrecuentes() {
  const [preguntas, setPreguntas] = useState([]);
  const endpoint = "http://localhost:3002/api";

  useEffect(() => {
    fetchPreguntas();
  }, [endpoint]);

  const fetchPreguntas = async () => {
    try {
      const response = await fetch(`${endpoint}/getPreguntasFrecuentes`);
      const data = await response.json();
      setPreguntas(data);
    } catch (error) {
      console.error("Error fetching preguntas frecuentes:", error);
    }
  };
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {preguntas.map((pregunta, idx) => (
          <div className="accordion-item" key={pregunta.id || idx}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseOne-${pregunta.id || idx}`}
                aria-expanded="false"
                aria-controls={`flush-collapseOne-${pregunta.id || idx}`}
              >
                {pregunta.pregunta}
              </button>
            </h2>
            <div
              id={`flush-collapseOne-${pregunta.id || idx}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {pregunta.respuesta}
                {pregunta.rutaPdf && (
                  <a
                    className="btn btn-success ms-2 mt-1"
                    href={pregunta.rutaPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
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
        className="col text-white border rounded-start-5"
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

function ConsultaDeuda() {
  const [sabeCuenta, setSabeCuenta] = useState(null);

  return (
    <>
      <div className="text-center">
        <h3 className="display-4 text-success mt-5 mb-5">Consulta de Deuda</h3>
        <p>
          Para consultar tu deuda, necesitas tener a la mano tu número de cuenta
          contrato.
        </p>
        <p>¿Sabes cuál es tu número de Cuenta Contrato?</p>
        <div className="d-flex justify-content-center m-4">
          <div className="form-check me-3">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault1"
              checked={sabeCuenta === true}
              onChange={() => setSabeCuenta(true)}
            />
            <label className="form-check-label" htmlFor="radioDefault1">
              Si
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault2"
              checked={sabeCuenta === false}
              onChange={() => setSabeCuenta(false)}
            />
            <label className="form-check-label" htmlFor="radioDefault2">
              No
            </label>
          </div>
        </div>
        {sabeCuenta === true && (
          <p>
            Puedes consultar tu deuda ingresando a la sección:
            <section
              className=" "
              style={{ width: "100%", height: "700px", margin: "0% 0% 0% 15%" }}
            >
              <iframe
                src="https://ov-capital.corpoelec.gob.ve/index.php/Login/saldo"
                title="Vista externa"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </section>
          </p>
        )}
        {sabeCuenta === false && <FormUsuarioBuscar />}
      </div>
    </>
  );
}
