import grafico from "../assets/img/graphy.svg";
export default function Historia() {
  return (
    <div className="container" id="Historia">
      <style>
        {`
    @media (max-width: 576px) {
      .grafico {
        display: none;
      }

      .parrafo {
        border-left: 2px solid #FFD600;
        padding-left: 20px;
      }
    }
  `}
      </style>

      <div className="row">
        <div className="col-md-4">
          <img
            src={grafico}
            alt="Grafico"
            className="img-fluid grafico"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="text-start col-md-8">
          <h2 className="display-3 text-success  mb-5 fw-bold">Historia</h2>
          <h2 className=" text-success fs-1 mt-5 mb-5">1986</h2>
          <p className="parrafo fs-5">
            Historia de Serdeco 1986 Se constituye la empresa ADMINISTRADORA
            SERDECO C.A., pero en 1987, se estructura como una empresa filial de
            la Electricidad de Caracas, debido al crecimiento de las centrales
            termoeléctricas asociadas al crecimiento de las ciudades, fenómeno
            observado a partir de la década del 70, a nivel nacional, y por ende
            el crecimiento de los servicios públicos.
          </p>
          <h2 className=" text-success fs-1 mt-5 mb-5">2004</h2>
          <p className="parrafo fs-5">
            Se firmó un contrato con la Electricidad de Caracas, en la que ambas
            partes, acuerdan la aplicación de una comisión a favor de la
            ADMINISTRADORA SERDECO C.A. en materia de asesoramiento gerencial en
            finanzas, tesorería, recursos humanos, riesgos, protección,
            planificación, presupuesto, legal, tecnología comercial y calidad en
            los servicios prestados. Es importante acotar que, para ese
            entonces, el alcance de servicios prestados por ADMINISTRADORA
            SERDECO C.A. era la atención al cliente e incorporación al ciclo
            comercial de facturación, impresión, notificación y recaudación.
            Además de, ejecución de la operación comercial, seguimiento y
            control de los procesos, acceso a la información catastral y
            planimetría de la ubicación geográfica de los clientes. Los
            servicios ofrecidos en esa época, incluía; aseo urbano y
            domiciliario, relleno sanitario, servicio eléctrico, gas y rentas
            municipales realizando la cobranza, (incluyendo judiciales y
            extrajudiciales) a personas naturales y jurídicas, públicas y
            privadas, inclusive contratos y gestiones relacionados a los
            servicios arriba indicados. Todo ello, apoyado en la plataforma
            tecnológica de la Electricidad de Caracas.
          </p>
          <h2 className="text-success fs-1 mt-5 mb-5">2007</h2>
          <p className="parrafo fs-5">
            Se anuncia la nacionalización de la Electricidad de Caracas, la cual
            conllevó la oferta de adquisición a los accionistas de la AES, la
            misma se hizo efectiva mediante la venta de sus acciones a la EDC,
            ese mismo año, se realizó la oferta pública de acciones OPA, para la
            toma de control por parte de PDVSA. Para mayo del mismo año, se
            estatiza, la Electricidad de Caracas, con la negociación en la Bolsa
            de Valores del 93,61% de las acciones y un mes después se aprueba
            una nueva Junta Directiva de carácter estatal y con ello se modifica
            la visión de la empresa.
          </p>
        </div>
      </div>
    </div>
  );
}
