import { useEffect, useRef } from "react";
import { Popover } from "bootstrap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const telefono = "584149239720";
export default function Contacto() {
  const iconRef = useRef();

  useEffect(() => {
    if (iconRef.current) {
      new Popover(iconRef.current, {
        container: "body",
        trigger: "click",
        placement: "top",
        html: true,
        sanitize: false,
        content: `
          <div class="card shadow-sm" style="width: 16rem;">
            <div class="card-header bg-success text-white text-center fw-bold">
              Administradora Serdeco
            </div>
            <div class="card-body text-center">
              <h6 class="card-title mb-3">Comunicate con nosotros</h6>
              <a href="https://wa.me/${telefono}" target="_blank" class="btn btn-success btn-sm">
                Contactar
              </a>
            </div>
          </div>
        `,
      });
    }
  }, []);

  return (
    <div className="fixed-bottom">
      <div
        className="text-end py-2 p-4 position-relative"
        style={{ display: "inline-block" }}
      >
        {/* Tooltip fijo al lado izquierdo */}
        <span
          className="bg-white text-body-emphasis px-3 py-2 rounded"
          style={{
            position: "absolute",
            right: "60px", // distancia desde el ícono
            bottom: "50%",
            transform: "translateY(50%) translateX(130%)",

            whiteSpace: "nowrap",
            fontSize: "0.85rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          Necesitas ayuda!!
        </span>

        {/* Ícono de WhatsApp con popover */}
        <FontAwesomeIcon
          ref={iconRef}
          icon={faWhatsapp}
          className="text-white"
          data-bs-toggle="popover"
          aria-label="Abrir contacto por WhatsApp"
          style={{
            backgroundColor: "#1cd641",
            borderRadius: "50%",
            padding: "14px",
            fontSize: "2rem",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
}
