import { useEffect, useState } from "react";

export default function OficinasAtencion() {
  const [estados, setEstados] = useState([]);
  const [oficinas, setOficinas] = useState([]);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null);
  const [oficinasFiltradas, setOficinasFiltradas] = useState([]);
  const endpoint = "http://serdeco.com.ve:3002/api";

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

      setEstados(estadosUnicos);

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
