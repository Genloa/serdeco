import logo from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";
import logo3 from "../../public/assets/img/logomppe.png"; // Nuevo logo
import imagen from "../../public/assets/img/banner.png";

export default function Banner() {
  return (
    <div
      id="top-banner"
      className="py-4 w-100"
      style={{
        zIndex: 1031,
        backgroundImage: `linear-gradient(to right, #1c5e32, rgba(255, 255, 255, 0.3)), url('${imagen}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Logo a la izquierda */}
          <div className="col-4 d-flex justify-content-start">
            <img src={logo3} alt="Logo 3" style={{ height: "60px" }} />
          </div>

          {/* Logos centrados */}
          <div className="col-5 d-flex justify-content-center">
            <img
              src={logo}
              alt="Logo 1"
              style={{ height: "35px" }}
              className="me-3"
            />
            <img src={logo2} alt="Logo 2" style={{ height: "25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
