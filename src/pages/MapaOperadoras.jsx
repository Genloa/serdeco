import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../assets/img/ve.json";

export default function MapaOperadoras() {
  // Lista de estados válidos
  const estadosValidos = [
    "Anzoátegui",
    "Aragua",
    "Barinas",
    "Bolívar",
    "Carabobo",
    "Cojedes",
    "Distrito Capital",
    "Falcón",
    "Guárico",
    "Lara",
    "Mérida",
    "Miranda",
    "Nueva Esparta",
    "Trujillo",
    "La Guaira",
    "Yaracuy",
  ];
  const endpoint = "http://localhost:3002/api";
  const [operadoras, setOperadoras] = useState([]);

  useEffect(() => {
    fetchOperadoras();
  }, []);

  const fetchOperadoras = async () => {
    try {
      const response = await fetch(`${endpoint}/getOperadoras`);
      const fetched = await response.json();
      setOperadoras(fetched);
      console.log("Operadoras fetched:", fetched);
    } catch (error) {
      console.error("Error fetching operadoras:", error);
    }
  };

  const [tooltipContent, setTooltipContent] = useState("");
  const [estadoFijado, setEstadoFijado] = useState(null);
  const getColorByName = (name) => {
    switch (name) {
      case "Anzoátegui":
        return "#FFD600";
      case "Aragua":
        return "#FFD600";
      case "Barinas":
        return "#FFD600";
      case "Bolívar":
        return "#FFD600";
      case "Carabobo":
        return "#FFD600";
      case "Cojedes":
        return "#FFD600";
      case "Distrito Capital":
        return "#FFD600";
      case "Falcón":
        return "#FFD600";
      case "Guárico":
        return "#FFD600";
      case "Lara":
        return "#FFD600";
      case "Mérida":
        return "#FFD600";
      case "Miranda":
        return "#FFD600";
      case "Nueva Esparta":
        return "#FFD600";
      case "Trujillo":
        return "#FFD600";
      case "La Guaira":
        return "#FFD600";
      case "Yaracuy":
        return "#FFD600";

      default:
        return "#bddbc7ff";
    }
  };

  const getColorByName2 = (name) => {
    if (estadoFijado && name === estadoFijado) {
      return "#FFD600";
    }
    switch (name) {
      case "Anzoátegui":
      case "Aragua":
      case "Barinas":
      case "Bolívar":
      case "Carabobo":
      case "Cojedes":
      case "Distrito Capital":
      case "Falcón":
      case "Guárico":
      case "Lara":
      case "Mérida":
      case "Miranda":
      case "Nueva Esparta":
      case "Trujillo":
      case "La Guaira":
      case "Yaracuy":
        return "#1c5e32";
      default:
        return "#bddbc7ff";
    }
  };

  // Estado para la página actual de la tabla
  const [paginaTabla, setPaginaTabla] = useState(0);
  const filasPorPagina = 4;

  // Resetear página al cambiar de estado seleccionado
  useEffect(() => {
    setPaginaTabla(0);
  }, [tooltipContent]);

  return (
    <>
      <div className="row align-items-center m-5" id="mapa">
        <div className="col-md-6">
          <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ marginBottom: "10px", fontWeight: "bold" }}></div>

            <ComposableMap
              width={500}
              height={500}
              projectionConfig={{
                scale: 1500,
                center: [-66, 6.5],
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const { name } = geo.properties;
                    const esValido = estadosValidos.includes(name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={
                          esValido && !estadoFijado
                            ? () => setTooltipContent(`Estado: ${name}`)
                            : undefined
                        }
                        onMouseLeave={
                          esValido && !estadoFijado
                            ? () => setTooltipContent("")
                            : undefined
                        }
                        onClick={
                          esValido
                            ? () => {
                                setTooltipContent(`Estado: ${name}`);
                                setEstadoFijado(name);
                              }
                            : undefined
                        }
                        style={{
                          default: {
                            fill: getColorByName2(name),
                            stroke: "#999",
                            strokeWidth: 0.5,
                            outline: "none",
                            cursor: esValido ? "pointer" : "default",
                          },
                          hover: {
                            fill: getColorByName(name),
                            outline: "none",
                            cursor: esValido ? "pointer" : "default",
                          },
                          pressed: {
                            fill: "#FF8C00",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
        <div className="col-md-5">
          {tooltipContent && (
            <>
              <h2
                className="display-6 fw-bold pb-3"
                style={{ color: "#8fc63f", margin: 0 }}
              >
                Cobertura {tooltipContent}
              </h2>
              {/* Mostrar municipios si hay coincidencia */}
              {(() => {
                // Extraer el nombre del estado del tooltipContent
                const match = tooltipContent.match(/Estado: (.+)/);
                const estadoSeleccionado = match ? match[1] : null;
                // Filtrar operadoras por estado
                const operadorasEstado = operadoras.filter(
                  (op) => op.estado.trim() === estadoSeleccionado
                );
                return (
                  <>
                    {/* Municipios ya no se muestran arriba, solo abajo agrupados por operadora */}
                    {operadorasEstado.length > 0 && (
                      <>
                        {/* Tabla con paginación */}
                        {(() => {
                          // Agrupar por nombre de operadora y mostrar municipio y servicio únicos
                          const filas = [];
                          const agrupadas = {};
                          operadorasEstado.forEach((op) => {
                            const nombre = op.nombre;
                            if (!agrupadas[nombre]) {
                              agrupadas[nombre] = new Set();
                            }
                            agrupadas[nombre].add(
                              `${op.municipio} - ${op.servicio}`
                            );
                          });
                          Object.entries(agrupadas).forEach(
                            ([nombre, municipioServicioSet]) => {
                              [...municipioServicioSet].forEach((ms) => {
                                const [municipio, servicio] = ms.split(" - ");
                                filas.push({ nombre, municipio, servicio });
                              });
                            }
                          );

                          // Paginación
                          const pageCount = Math.ceil(
                            filas.length / filasPorPagina
                          );
                          const offset = paginaTabla * filasPorPagina;
                          const filasPagina = filas.slice(
                            offset,
                            offset + filasPorPagina
                          );

                          return (
                            <>
                              <div className="table-responsive">
                                <table className="table ">
                                  <thead className="table-success">
                                    <tr>
                                      <th>Operadora</th>
                                      <th>Municipio</th>
                                      <th>Servicio</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {filasPagina.map((fila, idx) => (
                                      <tr key={idx}>
                                        <td>{fila.nombre}</td>
                                        <td>{fila.municipio}</td>
                                        <td>{fila.servicio}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                              {pageCount > 1 && (
                                <div className="d-flex justify-content-center">
                                  <ReactPaginate
                                    previousLabel={"Anterior"}
                                    nextLabel={"Siguiente"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={2}
                                    onPageChange={(selected) =>
                                      setPaginaTabla(selected.selected)
                                    }
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    pageLinkClassName={"page-link"}
                                    previousClassName={"page-item"}
                                    previousLinkClassName={"page-link"}
                                    nextClassName={"page-item"}
                                    nextLinkClassName={"page-link"}
                                    breakClassName={"page-item"}
                                    breakLinkClassName={"page-link"}
                                    activeClassName={"active"}
                                    forcePage={paginaTabla}
                                  />
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </>
                    )}
                  </>
                );
              })()}
              {/* Botón para limpiar selección */}
              <button
                className="btn btn-outline-success mt-3"
                onClick={() => {
                  setTooltipContent("");
                  setEstadoFijado(null);
                }}
              >
                Limpiar selección
              </button>
              {/* Mostrar logos únicos de operadoras filtradas */}
              {(() => {
                const match = tooltipContent.match(/Estado: (.+)/);
                const estadoSeleccionado = match ? match[1] : null;
                const operadorasEstado = operadoras.filter(
                  (op) => op.estado.trim() === estadoSeleccionado
                );
                // Solo operadoras con logo válido (no vacío ni null)
                const logosUnicos = Array.from(
                  new Map(
                    operadorasEstado
                      .filter((op) => op.logo && op.logo.trim().length > 0)
                      .map((op) => [op.nombre.trim(), op])
                  ).values()
                );
                if (logosUnicos.length === 0) return null;
                return (
                  <div
                    className="d-flex flex-wrap justify-content-center align-items-center mt-4"
                    style={{ gap: "24px", width: "100%" }}
                  >
                    {logosUnicos.map((op, idx) => (
                      <div
                        key={idx}
                        className="text-center"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: "140px",
                        }}
                      >
                        <a
                          href={op.url ? op.url.trim() : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "block" }}
                        >
                          <img
                            src={op.logo.trim()}
                            alt={op.nombre.trim()}
                            style={{
                              height: "70px",
                              width: "120px",
                              objectFit: "contain",
                              display: "block",
                              cursor: op.url ? "pointer" : "default",
                            }}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </>
          )}
          {/* Mostrar mensaje solo cuando no hay estado seleccionado */}
          {!tooltipContent && (
            <div>
              <h2
                className="display-7 text-success fw-bold text-start"
                style={{ margin: 0 }}
              >
                Mapa
              </h2>
              <h2
                className="display-5 fw-bold"
                style={{ color: "#8fc63f", margin: 0 }}
              >
                Cobertura Nacional
              </h2>
              <h2 className="display-8 fw-bold" style={{ margin: 0 }}>
                SERDECO
              </h2>
              <p className="display-6  mt-3 pt-3">
                Consulta nuestro mapa interactivo. Elige tu estado y conoce los
                municipios donde operamos con servicios de aseo urbano y relleno
                sanitario.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
