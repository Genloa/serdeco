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
      {/* Estilos responsivos para móvil */}
      <style>
        {`
          @media (max-width: 576px) {
            .itemc-img-main {
              width: 14rem !important;
              height: 14rem !important;
            }
            .itemc-img-bg1,
            .itemc-img-bg2,
            .itemc-img-bg3 {
              display: none !important;
            }
            .itemc-img-circle {
              width: 12rem !important;
              height: 12rem !important;
              margin-left: 4rem !important;
              margin-top: 8rem !important;
            }
            .itemc-yellow-circle {
              width: 5rem !important;
              height: 5rem !important;
              margin-left: 2rem !important;
              margin-top: 8rem !important;
            }
            .itemc-text-col {
              margin-top: 2rem !important;
            }
            .itemc-badge {
              font-size: 1.2rem !important;
              padding: 0.5rem 1rem !important;
            }
            .itemc-title {
              font-size: 2rem !important;
            }
            .itemc-subtitle {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
      {/* Elementos decorativos de fondo */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {/* Líneas curvas */}
        <svg
          className="position-absolute top-0 end-0 w-100 h-100"
          viewBox="0 0 1440 800"
          fill="none"
        ></svg>

        {/* Círculos decorativos amarillos */}

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
                <div
                  className="position-relative"
                  style={{ width: "20rem", height: "20rem" }}
                >
                  <div
                    className="position-absolute itemc-img-bg1"
                    style={{
                      width: "45rem",
                      height: "45rem",
                      backgroundColor: " #49845eff",
                      borderTopRightRadius: "50%",
                      borderTopLeftRadius: "50%",
                      marginTop: "-13rem",
                      marginLeft: "-17rem",
                      rotate: "45deg",
                    }}
                  ></div>
                  <div
                    className="position-absolute itemc-img-bg2"
                    style={{
                      width: "50rem",
                      height: "50rem",
                      borderRadius: "50%",
                      border: "5px solid #FFD600",
                      marginTop: "-15rem",
                      marginLeft: "-20rem",
                      rotate: "45deg",
                    }}
                  ></div>
                  <div
                    className="position-absolute itemc-img-bg3"
                    style={{
                      width: "45rem",
                      height: "45rem",
                      backgroundColor: " #49845eff",
                      marginTop: "11rem",
                      marginLeft: "-41rem",
                      rotate: "45deg",
                    }}
                  ></div>
                  <div
                    className="position-absolute rounded-circle overflow-hidden bg-white border border-5 border-white itemc-img-main itemc-img-circle"
                    style={{
                      width: "40rem",
                      height: "40rem",
                      marginLeft: "-15rem",
                      marginTop: "-10rem",
                    }}
                  >
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={imageAlt}
                      className="img-fluid h-100 w-100 object-fit-cover rounded-circle"
                    />
                  </div>
                  <div
                    className="position-absolute top-50 translate-middle-y me-5 itemc-yellow-circle"
                    style={{
                      width: "12rem",
                      height: "12rem",
                      backgroundColor: "#FFD600",
                      borderRadius: "50%",
                      marginLeft: "-16rem",
                      marginTop: "13rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Lado derecho - Texto */}
            <div
              className="col-12 col-lg-6 text-center text-lg-start itemc-text-col"
              style={{ marginTop: "15%" }}
            >
              {/* Badge de bienvenida */}
              <div className="d-inline-block mb-3">
                <span className="bg-warning text-success px-4 py-2 rounded-pill fs-1 fw-semibold itemc-badge">
                  {welcomeText}
                </span>
              </div>

              {/* Título principal */}
              <h1 className="display-4 fw-bold text-white lh-tight itemc-title">
                {mainHeading}
              </h1>

              {/* Subtítulo */}
              <p className="fs-5 text-warning fw-medium itemc-subtitle">
                {subtitle}
              </p>

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
