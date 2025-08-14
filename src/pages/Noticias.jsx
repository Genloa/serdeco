import Navbar from "../components/Navbar";
import { OpcionProvider } from "../components/OpcionContext";
import ScrollToHash from "../components/ScrollToHash";

function Noticias() {
  const noticias = [
    {
      img: "/assets/img/noticia2.jpg",
      tipo: "principal",
      titulo: "Jornada de Cobranza DISTRITO CAPITAL",
      texto:
        "Se llevó a cabo una jornada especial de registro y cobranza del servicio de aseo urbano en el municipio Libertador. La actividad se desarrolló en distintos sectores de la localidad, con el objetivo de facilitar el pago del servicio a los usuarios residenciales, comerciales e institucionales.",
      fecha: "01/04/2025",
    },
    {
      img: "/assets/img/noticia1.jpg",
      tipo: "secundaria",
      titulo: "Convenios de Pago",
      texto:
        "¿Necesitas ayuda? Nuestro equipo te atiende personalmente en nuestras oficinas. Recibimos tus solicitudes, reclamos o consultas con rapidez y compromiso. ¡Tu caso importa!",
      fecha: "25/07/2025",
    },
    {
      img: "/assets/img/noticia3.jpg",
      tipo: "secundaria",
      titulo: "Atención a las Operadoras",
      texto:
        "¿Eres una operadora de aseo o relleno? Nosotros nos encargamos de la facturación y atención al usuario, para que tú te enfoques en lo que haces mejor. ¡Confía en nuestra gestión eficiente y transparente!",
      fecha: "24/06/2025",
    },
  ];

  return (
    <OpcionProvider>
      <ScrollToHash />
      <div className="container mt-4">
        <h2 className="display-3 text-success text-center mb-5 fw-bold">
          Noticias
        </h2>
        <div className="row">
          {/* Noticia principal */}
          <div className="col-md-8 mb-4">
            <div className="border rounded p-3 h-100 d-flex flex-column">
              <img
                src={noticias[0].img}
                alt={noticias[0].titulo}
                className="img-fluid rounded mb-3"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <h3 className="fw-bold">{noticias[0].titulo}</h3>
              <p>{noticias[0].texto}</p>
              <p className="text-muted small mt-auto">{noticias[0].fecha}</p>
            </div>
          </div>

          {/* Noticias secundarias */}
          <div className="col-md-4 d-flex flex-column justify-content-between">
            {noticias.slice(1).map((noticia, index) => (
              <div
                key={index}
                className="border rounded p-3 mb-4 flex-fill d-flex flex-column"
              >
                <img
                  src={noticia.img}
                  alt={noticia.titulo}
                  className="img-fluid rounded mb-2"
                  style={{ height: "120px", objectFit: "cover" }}
                />
                <h5 className="fw-semibold">{noticia.titulo}</h5>
                <p>{noticia.texto}</p>
                <p className="text-muted small mt-auto">{noticia.fecha}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </OpcionProvider>
  );
}

export default Noticias;
