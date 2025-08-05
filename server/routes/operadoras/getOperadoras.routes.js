import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/getOperadoras", async (req, res) => {
  try {
    const operadoras = await prisma.operadoras.findMany({
      where: { estatus: "ACTIVO                                            " },
    });
    // Convertir BigInt a string
    const operadorasParsed = operadoras.map((op) => ({
      ...op,
      interlocutor: op.interlocutor.toString(),
    }));
    res.status(200).json(operadorasParsed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
