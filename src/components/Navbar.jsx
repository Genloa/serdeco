import { useState, useRef, useEffect } from "react";
import Collapse from "bootstrap/js/dist/collapse";
import logo from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const collapseInstance = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      collapseInstance.current = new Collapse(navRef.current, {
        toggle: false,
      });
    }
  }, []);

  const toggleMenu = () => {
    if (!collapseInstance.current) return;

    if (open) {
      collapseInstance.current.hide();
    } else {
      collapseInstance.current.show();
    }
    setOpen(!open);
  };

  const closeMenu = () => {
    if (collapseInstance.current && open) {
      collapseInstance.current.hide();
      setOpen(false);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light"
      style={{ backgroundColor: "#1c5e32" }}
    >
      <div className="container-fluid">
        {/* Logos */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo 1"
            className="img-fluid"
            style={{ height: "35px" }}
          />
        </a>
        <a className="navbar-brand ms-3 mb-1" href="#">
          <img
            src={logo2}
            alt="Logo 2"
            className="img-fluid"
            style={{ height: "25px" }}
          />
        </a>

        {/* Botón hamburguesa */}
        <button
          className="btn btn-outline-light d-block d-lg-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-1"></i>
        </button>

        {/* Menú colapsable */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
          ref={navRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                href="#"
                onClick={closeMenu}
              >
                Inicio
              </a>
            </li>

            {/* Quienes Somos */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quienes Somos
              </a>
              <ul className="dropdown-menu bg-success">
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#quienes-somos"
                    onClick={closeMenu}
                  >
                    Somos
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#Historia"
                    onClick={closeMenu}
                  >
                    Historia
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#Valores"
                    onClick={closeMenu}
                  >
                    Valores
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#testimonios"
                    onClick={closeMenu}
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#misionyvision"
                    onClick={closeMenu}
                  >
                    Misión y Visión
                  </a>
                </li>
              </ul>
            </li>

            {/* Atención al Cliente */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
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
                    className="dropdown-item text-light"
                    href="#antencioncliente"
                    onClick={closeMenu}
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#antencioncliente"
                    onClick={closeMenu}
                  >
                    Oficinas de Atención
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-light"
                    href="#antencioncliente"
                    onClick={closeMenu}
                  >
                    Reclamo
                  </a>
                </li>
              </ul>
            </li>

            {/* Otros enlaces */}
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="#mapa"
                onClick={closeMenu}
              >
                Mapa de Cobertura
              </a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link text-light" href="#" onClick={closeMenu}>
                Noticias
              </a>
            </li>*/}
          </ul>
        </div>

        {/* Estilos personalizados */}
        <style>
          {`
            .dropdown-menu li:hover .dropdown-item {
              color: #1c5e32 !important;
            }

            @media (max-width: 768px) {
              .dropdown-menu {
                position: static !important;
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    </nav>
  );
}
