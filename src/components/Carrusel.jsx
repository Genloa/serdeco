import PropTypes from "prop-types";

export default function Carrusel({ carruselItems }) {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      style={{ width: "100%", height: "70vh" }}
    >
      <div className="carousel-inner">
        {carruselItems.map((Item, idx) => (
          <div
            className={`carousel-item${idx === 0 ? " active" : ""}`}
            key={idx}
          >
            {Item}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

Carrusel.propTypes = {
  carruselItems: PropTypes.arrayOf(PropTypes.node).isRequired,
};
