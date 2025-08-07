import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/createReclamo", async (req, res) => {
  try {
    const data = req.body;
    console.log("Datos recibidos:", data);

    const reclamo = await prisma.reclamos.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        cedula: data.cedula,
        cuenta: data.cuenta,
        correo: data.correo,
        telefono: data.telefono,
        mensaje: data.mensaje,
        fecha: new Date(),
        estatus: "PENDIENTE",
      },
    });

    res.status(200).json(reclamo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
