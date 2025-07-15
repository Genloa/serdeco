import PropTypes from "prop-types";
export default function ItemCarrusel({
  welcomeText,
  mainHeading,
  subtitle,
  imageUrl,
  imageAlt,
}) {
  return (
    <div
      className="position-relative min-vh-100  overflow-hidden"
      style={{ backgroundColor: "#1c5e32" }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {/* Líneas curvas */}
        <svg
          className="position-absolute top-0 end-0 w-100 h-100"
          viewBox="0 0 1440 800"
          fill="none"
        >
          <path
            d="M200 200C400 300 600 100 800 200"
            stroke="rgb(234, 179, 8)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Círculos decorativos amarillos */}
        <div
          className="position-absolute top-50 end-0 translate-middle-y me-5"
          style={{
            width: "8rem",
            height: "8rem",
            backgroundColor: "#FFD600",
            borderRadius: "50%",
            opacity: 0.8,
          }}
        ></div>

        <div
          className="position-absolute top-0  start-50 translate-middle-y"
          style={{
            width: "40rem",
            height: "40rem",
            backgroundColor: " #49845ec2",
            borderRadius: "50%",
            marginLeft: "5rem",
          }}
        ></div>
      </div>

      {/* Puntos de navegación */}
      <div className="position-absolute top-0 mt-3 ms-5 start-0 ms-3 d-flex gap-2">
        <div
          className="border border-2 border-white rounded-circle"
          style={{ width: "0.75rem", height: "0.75rem" }}
        ></div>
        <div
          className="border border-2 border-white rounded-circle"
          style={{ width: "0.75rem", height: "0.75rem" }}
        ></div>
        <div
          className="border border-2 border-white rounded-circle"
          style={{ width: "0.75rem", height: "0.75rem" }}
        ></div>
        <div
          className="border border-2 border-white rounded-circle"
          style={{ width: "0.75rem", height: "0.75rem" }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="position-relative z-1 d-flex align-items-center min-vh-100 px-4 px-lg-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Lado izquierdo - Imagen */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
              <div className="position-relative">
                {/* Círculo amarillo detrás de la imagen */}
                <div
                  className="position-absolute bottom-0 start-0 translate-middle"
                  style={{
                    width: "6rem",
                    height: "6rem",
                    backgroundColor: "#FFD600",
                    borderRadius: "50%",
                  }}
                ></div>

                {/* Contenedor principal de la imagen circular */}
                <div
                  className="position-relative"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <div
                    className="position-absolute bottom-0  start-40  translate-middle-x"
                    style={{
                      width: "25rem",
                      height: "25rem",
                      backgroundColor: " #49845ec2",
                      borderRadius: "50%",
                      marginTop: "40rem",
                    }}
                  ></div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 ms-5 rounded-circle overflow-hidden bg-white border border-5  border-white">
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={imageAlt}
                      className="img-fluid h-100 w-100 object-fit-cover rounded-circle"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Lado derecho - Texto */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
              {/* Badge de bienvenida */}
              <div className="d-inline-block mb-3">
                <span className="bg-warning text-success px-4 py-2 rounded-pill fs-5 fw-semibold">
                  {welcomeText}
                </span>
              </div>

              {/* Título principal */}
              <h1 className="display-3 fw-bold text-white lh-tight">
                {mainHeading}
              </h1>

              {/* Subtítulo */}
              <p className="fs-4 text-warning fw-medium">{subtitle}</p>

              {/* Botón CTA */}
              <div className="pt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ItemCarrusel.propTypes = {
  welcomeText: PropTypes.string.isRequired,
  mainHeading: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired, // Ahora es requerido
  imageAlt: PropTypes.string,
};
