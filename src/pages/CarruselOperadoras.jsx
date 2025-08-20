import { useEffect, useState } from "react";
import { BASE_API_URL } from "../core/constants";

export default function CarruselOperadoras() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/getOperadoras`);
      const operadoras = await response.json();

      // Filtrar logos únicos y válidos
      const logosUnicos = Array.from(
        new Map(
          operadoras
            .filter((op) => op.logo && op.logo.trim().length > 0)
            .map((op) => [
              op.nombre.trim(),
              { src: op.logo.trim(), url: op.url ? op.url.trim() : "#" },
            ])
        ).values()
      );
      setLogos(logosUnicos);
    } catch (error) {
      console.error("Error fetching operadoras logos:", error);
    }
  };

  return (
    <div className="carrusel-operadoras">
      <style>
        {`
          .carrusel-operadoras {
            width: 100%;
            max-width: 100vw;
            overflow: hidden;
            padding: 10px 0;
            background-color: #fff;
            box-sizing: border-box;
          }

          .carrusel-track {
            display: flex;
            gap: 30px;
            animation: scroll 30s linear infinite;
          }

          .logo-wrapper {
            flex: 0 0 auto;
            width: 120px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-wrapper img {
            max-width: 100%;
            max-height: 60px;
            object-fit: contain;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .logo-wrapper {
              width: 80px;
              height: 40px;
            }
            .logo-wrapper img {
              max-height: 50px;
            }
          }
        `}
      </style>

      <div className="carrusel-track">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="logo-wrapper mt-2">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={`logo-${idx}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
