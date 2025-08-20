import { useState } from "react";
import { BASE_API_URL } from "../core/constants";
import FormUsuarioBuscar from "./FormBuscarUsuario";

export default function ConsultaDeuda() {
  const [progress, setProgress] = useState(0);
  const [cuenta, setCuenta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sabeCuenta, setSabeCuenta] = useState(null);
  const [datosUsuario, setDatosUsuario] = useState(null);
  const defaultValues = {
    cedula: "",
  };
  const onSubmit = async (data, reset) => {
    try {
      setLoading(true);
      setDatosUsuario(null);

      const response = await fetch(`${BASE_API_URL}/getUsuarioCatastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setProgress(60);
      const result = await response.json();
      setProgress(100);
      setDatosUsuario(result);

      reset();
    } catch (error) {
      console.error("Error enviando datos:", error);
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <>
      <div className="text-center">
        <h3 className="display-4 text-success mt-5 mb-5">Consulta de Deuda</h3>
        <p>
          Para consultar tu deuda, necesitas tener a la mano tu número de cuenta
          contrato.
        </p>
        <p>¿Sabes cuál es tu número de Cuenta Contrato?</p>
        <div className="d-flex justify-content-center m-4">
          <div className="form-check me-3">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault1"
              checked={sabeCuenta === true}
              onChange={() => setSabeCuenta(true)}
            />
            <label className="form-check-label" htmlFor="radioDefault1">
              Si
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault2"
              checked={sabeCuenta === false}
              onChange={() => setSabeCuenta(false)}
            />
            <label className="form-check-label" htmlFor="radioDefault2">
              No
            </label>
          </div>
        </div>
        {sabeCuenta === true && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <p>
                  Puedes consultar tu deuda ingresando a la sección:
                  {cuenta && <h1>{cuenta}</h1>}
                  <section
                    className=" "
                    style={{
                      width: "100%",
                      height: "700px",
                    }}
                  >
                    <iframe
                      src="https://ov-capital.corpoelec.gob.ve/index.php/Login/saldo"
                      title="Vista externa"
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </section>
                </p>
              </div>
            </div>
          </div>
        )}
        {sabeCuenta === false && (
          <div className="container">
            <div className="row justify-content-center">
              {Array.isArray(datosUsuario) && datosUsuario.length > 0 && (
                <div className="col-12 col-md-8 border rounded-4 p-3 mt-4 mb-4">
                  <h5 className="text-center">Resultados de la Consulta:</h5>

                  {/* Tabla para pantallas medianas y grandes */}
                  <div className="d-none d-md-block">
                    <table className="table mt-4">
                      <thead className="table-success">
                        <tr>
                          <th>Usuario</th>
                          <th>Cédula</th>
                          <th>Cuenta Contrato</th>
                          <th>Dirección</th>
                        </tr>
                      </thead>
                      <tbody>
                        {datosUsuario
                          .filter(
                            (usuario, index, self) =>
                              index ===
                              self.findIndex(
                                (u) =>
                                  u.cedula === usuario.cedula &&
                                  u.cuentaContrato === usuario.cuentaContrato &&
                                  u.direccion === usuario.direccion
                              )
                          )
                          .map((usuario, index) => (
                            <tr key={index}>
                              <td>
                                {usuario.nombre} {usuario.apellido}
                              </td>
                              <td>{usuario.cedula}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => {
                                    setCuenta(usuario.cuentaContrato);
                                    setSabeCuenta(true);
                                  }}
                                >
                                  {usuario.cuentaContrato}{" "}
                                </button>
                              </td>
                              <td>{usuario.direccion}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tarjetas para móviles */}
                  <div className="d-block d-md-none">
                    {datosUsuario
                      .filter(
                        (usuario, index, self) =>
                          index ===
                          self.findIndex(
                            (u) =>
                              u.cedula === usuario.cedula &&
                              u.cuentaContrato === usuario.cuentaContrato &&
                              u.direccion === usuario.direccion
                          )
                      )
                      .map((usuario, index) => (
                        <div key={index} className="card mb-3">
                          <div className="card-body">
                            <p>
                              <strong>Usuario:</strong> {usuario.nombre}{" "}
                              {usuario.apellido}
                            </p>
                            <p>
                              <strong>Cédula:</strong> {usuario.cedula}
                            </p>
                            <p>
                              <strong>Cuenta Contrato:</strong>{" "}
                              <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                  setCuenta(usuario.cuentaContrato);
                                  setSabeCuenta(true);
                                }}
                              >
                                {usuario.cuentaContrato}{" "}
                              </button>
                            </p>
                            <p>
                              <strong>Dirección:</strong> {usuario.direccion}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {datosUsuario && datosUsuario.length === 0 && (
                <div className="col-12 col-md-8">
                  <div className="alert alert-warning" role="alert">
                    No se encontraron resultados para la cédula proporcionada.
                  </div>
                </div>
              )}
              <div className="col-12 col-md-8">
                {loading && (
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Success striped example"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-success"
                      style={{ width: `${progress}%` }}
                    >
                      {progress}%
                    </div>
                  </div>
                )}
              </div>
              <div className="col-12 col-md-8">
                <FormUsuarioBuscar
                  onSubmit={onSubmit}
                  defaultValues={defaultValues}
                  setProgress={setProgress}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
