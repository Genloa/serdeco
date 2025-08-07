import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/getOficinas", async (req, res) => {
  try {
    const oficinas = await prisma.oficinas_atencion.findMany({
      where: { estatus: "ACTIVO                                            " },
    });

    res.status(200).json(oficinas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
