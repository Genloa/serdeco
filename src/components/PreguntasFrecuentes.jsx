import { useEffect, useState } from "react";
import { BASE_API_URL } from "../core/constants";

export default function PreguntasFrecuentes() {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    fetchPreguntas();
  }, []);

  const fetchPreguntas = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/getPreguntasFrecuentes`);
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
