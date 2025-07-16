import testimonio1 from "../assets/img/testimonio1.png";
import testimonio2 from "../assets/img/testimonio2.png";
import testimonio3 from "../assets/img/testimonio3.png";
export default function Testimonios() {
  const testimonios = [
    {
      img: testimonio1,
      alt: "Usuario Satisfecho 1",
      texto: "Excelente servicio, siempre puntuales y amables.",
    },
    {
      img: testimonio2,
      alt: "Usuario Satisfecho 2",
      texto: "La mejor empresa de aseo que he conocido.",
    },
    {
      img: testimonio3,
      alt: "Usuario Satisfecho 3",
      texto: "Muy profesionales y comprometidos con el medio ambiente.",
    },
  ];

  return (
    <div className="container" id="testimonios">
      <h2 className="text-center text-success fs-1 mt-5 mb-5">Testimonios</h2>
      <div className="row">
        {testimonios.map((t, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="text-center">
              <img
                src={t.img}
                className="img-fluid rounded-circle mb-3"
                style={{ width: "200px", height: "200px" }}
                alt={t.alt}
              />
              <h4>Usuario Satisfecho</h4>
              <p>{t.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
