import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { buscarUsuarioSchema } from "../validations/buscarUsuarioSchema";

function FormUsuarioBuscar({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(buscarUsuarioSchema),
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
    onSubmit(data, reset);
  };
  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="row g-3 ">
        <div className="col-12">
          <div className="form-floating">
            <input
              type="text"
              id="cedula"
              className={getInputClassName("cedula")}
              placeholder="cedula"
              aria-label="cedula"
              {...register("cedula")}
            />
            <label htmlFor="cedula">Numero de Cedula o Rif</label>
            {errors.cedula?.message && (
              <div className="invalid-feedback">{errors.cedula?.message}</div>
            )}
          </div>
        </div>
        <div className="col-12">
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
      </div>

      <div className="modal-footer">
        <button type="submit" className="btn btn-success m-5">
          Buscar
        </button>
      </div>
    </form>
  );
}

FormUsuarioBuscar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object.isRequired,
};

export default FormUsuarioBuscar;
