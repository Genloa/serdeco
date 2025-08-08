import { z } from "zod";
export const buscarUsuarioSchema = z.object({
  cedula: z.string().min(9, {
    message: "el documento son  9 caracteres",
  }),
  correo: z.string().email().optional(),
});
