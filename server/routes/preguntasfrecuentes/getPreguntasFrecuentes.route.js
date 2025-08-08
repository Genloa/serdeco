import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/getPreguntasFrecuentes", async (req, res) => {
  try {
    const preguntas = await prisma.preguntas_frecuentes.findMany({
      where: { estatus: "ACTIVO                                            " },
    });

    res.status(200).json(preguntas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
