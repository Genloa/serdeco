export default function Footer() {
  return (
    <footer
      className=" text-center text-white  border-5 border-bottom border-warning"
      style={{
        backgroundColor: "#1c5e32",
      }}
    >
      <div className="row">
        <div className="col-9">
          <div>
            <img src="" alt="" />
          </div>
          <h4 className="text-start ps-4">
            Somos expertos en facturacion Rif: J-002407034
          </h4>
        </div>
        <div className="col pt-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>
        </div>
      </div>
      <div className="text-center p-3">
        © 1986 Serdeco. Todos los derechos reservados.
      </div>
    </footer>
  );
}
