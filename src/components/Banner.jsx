import logo from "../../public/assets/img/logoserdeco.png";
import logo2 from "../assets/img/logo_2.png";
import logo3 from "../../public/assets/img/logomppe.png"; // Nuevo logo
import imagen from "../../public/assets/img/banner.png";

export default function Banner() {
  return (
    <div
      id="top-banner"
      className="w-100"
      style={{
        zIndex: 1031,
        backgroundImage: `linear-gradient(to right, #1c5e32, rgba(255, 255, 255, 0.3)), url('${imagen}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>
        {`
     @media (max-width: 576px) {
     .logo-serdeco {
     display: none;
     } 
     }
      
  `}
      </style>
      <div>
        <div className="row align-items-center">
          <div className="col-4 d-flex justify-content-start">
            <img src={logo3} alt="Logo 3" style={{ height: "90px" }} />
          </div>

          {/* Logos centrados */}
          <div className="col-3 d-flex justify-content-center ">
            <img
              className="logo-serdeco"
              src={logo}
              alt="Logo 1"
              style={{ height: "90px" }}
            />
            <img
              className="logo-serdeco"
              src={logo2}
              alt="Logo 2"
              style={{ height: "30px", marginTop: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
