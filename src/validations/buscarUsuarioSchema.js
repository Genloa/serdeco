import { z } from "zod";
export const buscarUsuarioSchema = z.object({
  cedula: z
    .string()
    .min(5, {
      message: "el documento son  9 caracteres solo numericos",
    })
    .max(9, {
      message: "el documento son  9 caracteres solo numericos",
    }),
});
