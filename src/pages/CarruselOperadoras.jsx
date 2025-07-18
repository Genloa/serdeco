import PropTypes from "prop-types";

export default function CarruselOperadoras({ logos }) {
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
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-wrapper img {
            max-width: 100%;
            max-height: 100%;
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
              height: 60px;
            }
          }
        `}
      </style>

      <div className="carrusel-track">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="logo-wrapper mt-2">
            <img src={logo} alt={`logo-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

CarruselOperadoras.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
