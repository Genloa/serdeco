export default function ServiciosAtencion() {
  const serviciosAtencion = [
    {
      img: "/assets/img/atencionUsuario.jpg",
      alt: "1",
      titulo: "Atención de Casos CIAU ",
      texto:
        "¿Tienes pagos pendientes? ¡No te preocupes! Ofrecemos convenios flexibles que te permiten dividir tu deuda en hasta cinco cómodas cuotas. Tu tranquilidad financiera es nuestra prioridad.",
    },
    {
      img: "/assets/img/convenio.jpg",
      alt: "2",
      titulo: "Convenios de Pago",
      texto:
        "¿Necesitas ayuda? Nuestro equipo te atiende personalmente en nuestras oficinas. Recibimos tus solicitudes, reclamos o consultas con rapidez y compromiso. ¡Tu caso importa!",
    },
    {
      img: "/assets/img/nuevaOperadora.jpg",
      alt: "3",
      titulo: "Atención a las Operadoras",
      texto:
        "¿Eres una operadora de aseo o relleno? Nosotros nos encargamos de la facturación y atención al usuario, para que tú te enfoques en lo que haces mejor. ¡Confía en nuestra gestión eficiente y transparente!",
    },
  ];

  return (
    <div className="container mb-5" id="serviciosAtencion">
      <style>
        {`
        .card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: scale(1.03);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.15);
}
       `}
      </style>
      <h2 className="text-center text-success mt-5 mb-5 display-4 fw-bold">
        Servicios Recurrentes de Atención
      </h2>
      <div className="row">
        {serviciosAtencion.map((t, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card card-hover bg-light rounded h-100">
              <img
                src={t.img}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
                alt={t.alt}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title  text-success fs-3">
                  <b>{t.titulo}</b>
                </h5>
                <p className="card-text">{t.texto}</p>
                <button className="btn btn-warning mt-auto">{t.boton}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
