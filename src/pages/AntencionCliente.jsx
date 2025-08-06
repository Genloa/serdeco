import { useState } from "react";

export default function AtencionCliente() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container-fluid w-100" id="antencioncliente">
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
                onClick={() => setOpen((prev) => !prev)}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck1">
                Preguntas Frecuentes
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
                aria-expanded={open}
                aria-controls="collapseOficinas"
                onClick={() => setOpen((prev) => !prev)}
              />
              <label className="btn btn-outline-success" htmlFor="btncheck2">
                Oficinas de Atención
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autoComplete="off"
              />
              <label className="btn btn-outline-success" htmlFor="btncheck3">
                Hacer Reclamo
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
                }}
              >
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
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
              </div>
            </div>

            <div
              id="collapseOficinas"
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
                }}
              >
                <p>Aquí puedes encontrar las oficinas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
