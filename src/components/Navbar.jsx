import logo from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light"
      style={{ backgroundColor: "#1c5e32" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="140%" height="35" />
        </a>
        <a className="navbar-brand ms-3 mb-1" href="#">
          <img src={logo2} alt="" width="90%" height="25" />
        </a>
        <style>
          {`.dropdown-menu li:hover .dropdown-item {
          color: #1c5e32 !important;
          }`}
        </style>
        {/* Botón hamburguesa para móvil */}
        <button
          className="btn btn-outline-light d-block d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="bi bi-list fs-1"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-light "
                href="#quienes-somos"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quienes Somos
              </a>
              <ul className="dropdown-menu  bg-success">
                <li>
                  <a
                    className="dropdown-item text-light  "
                    href="#quienes-somos"
                  >
                    Somos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light  " href="#Historia">
                    Historia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light  " href="#Valores">
                    Valores
                  </a>
                </li>

                <li>
                  <a className="dropdown-item text-light " href="#testimonios">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#misionyvision">
                    Misión Y Visión
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light "
                href="#antencioncliente"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Atención al Cliente
              </a>
              <ul className="dropdown-menu bg-success">
                <li>
                  <a
                    className="dropdown-item text-light "
                    href="#antencioncliente"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light "
                    href="#antencioncliente"
                  >
                    Oficinas de Atención
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light "
                    href="#antencioncliente"
                  >
                    Reclamo
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#mapa">
                Mapa de Cobertura
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#">
                Noticias
              </a>
            </li>
          </ul>
        </div>
        {/* <button type="button" className="btn text-light fw-bold bg-warning">
          Contactanos
        </button> */}
      </div>
    </nav>
  );
}
