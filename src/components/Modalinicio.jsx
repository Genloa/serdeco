import { useState, useEffect } from "react";
import imagen from "../assets/img/modal.png"; // Asegúrate de tener una imagen válida
import "../assets/css/modal.css"; // Estilos del modal

function Modalinicio() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Mostrar automáticamente al cargar
  }, []);

  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <div className=" modal-overlay" onClick={handleClose}>
          <div className="modal-content">
            <button className="modal-close text-white" onClick={handleClose}>
              x
            </button>
            <img src={imagen} alt="modal" style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </>
  );
}

export default Modalinicio;
