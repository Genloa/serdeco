import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "../assets/img/ve.json";

export default function MapaOperadoras() {
  const [tooltipContent, setTooltipContent] = useState("");
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
    switch (name) {
      case "Anzoátegui":
        return "#1c5e32";
      case "Aragua":
        return "#1c5e32";
      case "Barinas":
        return "#1c5e32";
      case "Bolívar":
        return "#1c5e32";
      case "Carabobo":
        return "#1c5e32";
      case "Cojedes":
        return "#1c5e32";
      case "Distrito Capital":
        return "#1c5e32";
      case "Falcón":
        return "#1c5e32";
      case "Guárico":
        return "#1c5e32";
      case "Lara":
        return "#1c5e32";
      case "Mérida":
        return "#1c5e32";
      case "Miranda":
        return "#1c5e32";
      case "Nueva Esparta":
        return "#1c5e32";
      case "Trujillo":
        return "#1c5e32";
      case "La Guaira":
        return "#1c5e32";
      case "Yaracuy":
        return "#1c5e32";

      default:
        return "#bddbc7ff";
    }
  };

  return (
    <>
      <div className="row align-items-center m-5" id="mapa">
        <h2 className="display-4 text-success fw-bold text-center">
          Mapa de Cobertura
        </h2>
        <div className="col-md-5">
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
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { name } = geo.properties;
                        setTooltipContent(`Estado: ${name}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: getColorByName2(geo.properties.name),
                          stroke: "#999",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: getColorByName(geo.properties.name),
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FF8C00",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
        <div className="col-md-7">
          {tooltipContent && (
            <h2 className="text-success fw-bold">{tooltipContent}</h2>
          )}

          <p>servicios de aseo urbano y relleno sanitario</p>
          <h2 className="text-success fw-bold">Operadoras: </h2>
          <ul className="list-unstyled">
            <li>
              <i className="bi bi-file-earmark-text me-2 text-success"></i>
            </li>
            <li>
              <i className="bi bi-shield-check me-2 text-success"></i>
            </li>
            <li>
              <i className="bi bi-lightbulb me-2 text-success"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
