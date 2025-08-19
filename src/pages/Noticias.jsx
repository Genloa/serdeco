import { OpcionProvider } from "../components/OpcionContext";
import ScrollToHash from "../components/ScrollToHash";

function Noticias() {
  const noticias = [
    {
      img: "/assets/img/noticia2.jpg",
      tipo: "principal",
      titulo: "Jornada de Cobranza DISTRITO CAPITAL",
      texto:
        "Se realizó una jornada especial de cobranza del servicio de aseo urbano y relleno sanitario en Ciudad Tiuna, con el acompañamiento de Corpoelec. Esta actividad tuvo como propósito facilitar el pago del servicio a los usuarios residenciales, así como brindar información detallada sobre los distintos servicios disponibles y sus modalidades de pago.",
      fecha: "14/07/2025",
    },
    {
      img: "/assets/img/noticia1.jpg",
      tipo: "secundaria",
      titulo: "Cobranza de Servicios Municipio Hatillo",
      texto:
        "En el Centro Comercial La Muralla, ubicado en el Municipio El Hatillo, se llevó a cabo una jornada especial de atención al usuario para el cobro del servicio de aseo urbano y relleno sanitario. La actividad contó con el respaldo de Corpoelec y buscó facilitar el proceso de pago.",
      fecha: "27/05/2025",
    },
    {
      img: "/assets/img/noticia3.jpg",
      tipo: "secundaria",
      titulo: "Visitas a Comercios la Candelaria",
      texto:
        "Como parte del plan de recuperación de ingresos, se visitaron establecimientos comerciales en la parroquia Candelaria, Distrito Capital, para notificar deudas por el servicio de aseo urbano y ofrecer alternativas de regularización.",
      fecha: "24/04/2025",
    },
  ];

  return (
    <OpcionProvider>
      <ScrollToHash />
      <div className="container mt-4" id="noticias">
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
    </OpcionProvider>
  );
}

export default Noticias;
