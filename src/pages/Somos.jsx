import somos from "../assets/img/somos.png";

export default function Somos() {
  return (
    <section className="row align-items-center m-5" id="quienes-somos">
      <div className="col-md-5">
        <img src={somos} alt="Imagen sobre Serdeco" className="img-fluid" />
      </div>
      <div className="col-md-7">
        <h2 className="display-3 text-success fw-bold">Serdeco</h2>
        <p>¡Juntos por una ciudad limpia!</p>
        <h2 className="text-success fw-bold">¿Quiénes somos?</h2>
        <p>
          Líderes en la gestión comercial, facturación y recaudación de
          servicios de aseo urbano y relleno sanitario, comprometidos con la
          sostenibilidad y la mejora continua de la calidad de vida en las
          ciudades.
        </p>
        <h2 className="text-success fw-bold">¿Qué hacemos?</h2>
        <ul className="list-unstyled">
          <li>
            <i className="bi bi-file-earmark-text me-2 text-success"></i>
            Facturación oportuna.
          </li>
          <li>
            <i className="bi bi-shield-check me-2 text-success"></i>
            Garantizamos accesibilidad, confianza y seguridad.
          </li>
          <li>
            <i className="bi bi-lightbulb me-2 text-success"></i>
            Brindamos soluciones innovadoras para satisfacer las necesidades de
            nuestros usuarios.
          </li>
        </ul>
      </div>
    </section>
  );
}
