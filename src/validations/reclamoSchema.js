import { z } from "zod";
const tiposCedula = ["V", "E", "G", "J"];
export const reclamoSchema = z
  .object({
    nombre: z.string().optional(),
    apellido: z.string().optional(),
    cuenta: z
      .string()
      .max(12, {
        message: "La cuenta contrato es 12 caracteres",
      })
      .min(12, {
        message: "La cuenta contrato es 12 caracteres",
      }),
    correo: z.string().email().optional(),
    telefono: z.string().min(11, {
      message:
        "Debe ingresar un número de teléfono válido (mínimo 11 caracteres)",
    }),
    mensaje: z.string().optional(),
    cedula: z.string().optional(),
    tipoCedula: z.enum(tiposCedula).optional().nullable().or(z.literal("")),
  })
  .refine(
    (data) =>
      !!data.nombre ||
      !!data.apellido ||
      !!data.correo ||
      !!data.telefono ||
      !!data.mensaje ||
      !!data.cedula ||
      !!data.tipoCedula,
    {
      message: "Debes llenar al menos un campo para generar el reporte.",
      path: ["mensaje"],
    }
  );
