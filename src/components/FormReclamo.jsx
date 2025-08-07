import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { reclamoSchema } from "../validations/reclamoSchema";

function FormReclamo({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(reclamoSchema),
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const getInputClassName = (fieldName) => {
    if (!dirtyFields[fieldName]) {
      return "form-control";
    }
    return `form-control ${errors[fieldName] ? "is-invalid" : "is-valid"}`;
  };

  const onSubmitForm = (data) => {
    console.log("Datos del formulario antes de enviar:", data);
    // Aseguramos que los campos existen y son strings
    const cedula = data.cedula || "";
    const tipoCedula = data.tipoCedula || "";

    if (cedula.length > 0 && tipoCedula.length > 0) {
      const { tipoCedula, cedula, ...rest } = data;
      const dataConcatenada = {
        ...rest,
        cedula: `${tipoCedula}-${cedula}`,
      };
      onSubmit(dataConcatenada, reset);
    } else {
      onSubmit(data, reset);
    }
  };
  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="row g-3 ">
        <div className="col-4">
          <div className="form-floating">
            <input
              type="text"
              id="nombre"
              className={getInputClassName("nombre")}
              placeholder="nombre"
              aria-label="nombre"
              {...register("nombre")}
            />
            <label htmlFor="nombre">Nombre</label>
            {errors.nombre?.message && (
              <div className="invalid-feedback">{errors.nombre?.message}</div>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="form-floating">
            <input
              type="text"
              id="apellido"
              className={getInputClassName("apellido")}
              placeholder="apellido"
              aria-label="apellido"
              {...register("apellido")}
            />
            <label htmlFor="apellido">Apellido</label>
            {errors.apellido?.message && (
              <div className="invalid-feedback">{errors.apellido?.message}</div>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="form-floating">
            <input
              type="text"
              id="cuenta"
              className={getInputClassName("cuenta")}
              placeholder="cuenta"
              aria-label="cuenta"
              {...register("cuenta")}
            />
            <label htmlFor="cuenta">Cuenta Contrato</label>
            {errors.cuenta?.message && (
              <div className="invalid-feedback">{errors.cuenta?.message}</div>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="input-group ">
            <select
              className={`form-select flex-grow-0 bg-light ${
                errors.tipocedula ? "is-invalid" : ""
              }`}
              style={{ width: "80px" }}
              aria-label="Tipo de cedula"
              {...register("tipoCedula")}
            >
              <option value="">Tipo</option>
              <option value="V">V</option>
              <option value="E">E</option>
            </select>
            <input
              type="text"
              id="cedula"
              className={getInputClassName("cedula")}
              placeholder="cedula"
              aria-label="cedula"
              {...register("cedula")}
            />
            <label htmlFor="cedula"></label>
            {errors.cedula?.message && (
              <div className="invalid-feedback">{errors.cedula?.message}</div>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="form-floating">
            <input
              type="text"
              id="correo"
              className={getInputClassName("correo")}
              placeholder="correo"
              aria-label="correo"
              {...register("correo")}
            />
            <label htmlFor="correo">correo</label>
            {errors.correo?.message && (
              <div className="invalid-feedback">{errors.correo?.message}</div>
            )}
          </div>
        </div>
        <div className="col-4">
          <div className="form-floating">
            <input
              type="text"
              id="telefono"
              className={getInputClassName("telefono")}
              placeholder="telefono"
              aria-label="telefono"
              {...register("telefono")}
            />
            <label htmlFor="telefono">telefono</label>
            {errors.telefono?.message && (
              <div className="invalid-feedback">{errors.telefono?.message}</div>
            )}
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <textarea
              id="mensaje"
              className={getInputClassName("mensaje")}
              placeholder="mensaje de reclamo"
              aria-label="mensaje"
              {...register("mensaje")}
            />
            <label className="z-0" htmlFor="mensaje">
              Descripción:
            </label>
            {errors.mensaje?.message && (
              <div className="invalid-feedback">{errors.mensaje?.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </div>
    </form>
  );
}

FormReclamo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object.isRequired,
};

export default FormReclamo;
