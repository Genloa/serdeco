import { useContext, useEffect, useState } from "react";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
import OficinasAtencion from "../components/OficinasAtencion";
import Reclamos from "../components/Reclamos";
import ConsultaDeuda from "../components/ConsultaDeuda";
import { OpcionContext } from "../components/OpcionContext";

export default function AtencionCliente() {
  const { opcion, setOpcion } = useContext(OpcionContext);
  const [openPanel, setOpenPanel] = useState(null); // valores: 1, 2, 3, 4 o null

  useEffect(() => {
    if (opcion.estado) {
      setOpenPanel(opcion.tipo);
    }
  }, [opcion]);

  const handleToggle = (tipo) => {
    if (openPanel === tipo) {
      setOpcion({ estado: false, tipo: null }); // cerrar si ya está abierto
    } else {
      setOpcion({ estado: true, tipo }); // abrir el panel seleccionado
    }
  };

  return (
    <div className="container-fluid w-100 pb-5" id="antencioncliente">
      <h2 className="text-center text-success mt-5 mb-5 display-4 fw-bold">
        Atención al Cliente
      </h2>

      <div className="text-center text-white mt-5 mb-4">
        <div className="btn-group" role="group" aria-label="Opciones">
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck1"
            checked={openPanel === 1}
            onChange={() => handleToggle(1)}
          />
          <label className="btn btn-outline-success" htmlFor="btncheck1">
            Preguntas Frecuentes
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck2"
            checked={openPanel === 2}
            onChange={() => handleToggle(2)}
          />
          <label className="btn btn-outline-success" htmlFor="btncheck2">
            Oficinas Atención
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck3"
            checked={openPanel === 3}
            onChange={() => handleToggle(3)}
          />
          <label className="btn btn-outline-success" htmlFor="btncheck3">
            Contactanos
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id="btncheck4"
            checked={openPanel === 4}
            onChange={() => handleToggle(4)}
          />
          <label className="btn btn-outline-success" htmlFor="btncheck4">
            Consultar Deuda
          </label>
        </div>
      </div>

      <div className="text-center mt-5 mb-4 position-relative">
        {/* Panel 1 */}
        <div
          id="collapsePreguntas"
          style={{
            width: openPanel === 1 ? "100%" : "0",
            overflow: "hidden",
            transition: "width 0.4s ease",
            display: "inline-block",
          }}
        >
          <div
            className="border border-success rounded-4"
            style={{
              width: openPanel === 1 ? "100%" : "0",
              padding: openPanel === 1 ? "1rem" : "0",
            }}
          >
            {openPanel === 1 && <PreguntasFrecuentes />}
          </div>
        </div>

        {/* Panel 2 */}
        <div
          id="collapseOficinas"
          style={{
            width: openPanel === 2 ? "100%" : "0",
            overflow: "hidden",
            transition: "width 0.4s ease",
            display: "inline-block",
          }}
        >
          <div
            className="border border-success rounded-4"
            style={{
              width: openPanel === 2 ? "100%" : "0",
              padding: openPanel === 2 ? "1rem" : "0",
            }}
          >
            {openPanel === 2 && <OficinasAtencion />}
          </div>
        </div>

        {/* Panel 3 */}
        <div
          id="collapseReclamos"
          style={{
            width: openPanel === 3 ? "100%" : "0",
            overflow: "hidden",
            transition: "width 0.4s ease",
            display: "inline-block",
          }}
        >
          <div
            className="border border-success rounded-4"
            style={{
              width: openPanel === 3 ? "100%" : "0",
              padding: openPanel === 3 ? "1rem" : "0",
            }}
          >
            {openPanel === 3 && <Reclamos />}
          </div>
        </div>

        {/* Panel 4 */}
        <div
          id="collapseDeuda"
          style={{
            width: openPanel === 4 ? "100%" : "0",
            overflow: "hidden",
            transition: "width 0.4s ease",
            display: "inline-block",
          }}
        >
          <div
            className="border border-success rounded-4"
            style={{
              width: openPanel === 4 ? "100%" : "0",
              padding: openPanel === 4 ? "1rem" : "0",
            }}
          >
            {openPanel === 4 && <ConsultaDeuda />}
          </div>
        </div>
      </div>
    </div>
  );
}
