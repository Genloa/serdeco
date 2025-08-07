-- CreateTable
CREATE TABLE "public"."reclamos" (
    "id" SERIAL NOT NULL,
    "nombre" CHAR(120) NOT NULL,
    "apellido" CHAR(120) NOT NULL,
    "cedula" CHAR(50) NOT NULL,
    "cuenta" CHAR(12),
    "correo" CHAR(100) NOT NULL,
    "telefono" CHAR(50),
    "mensaje" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estatus" CHAR(50),

    CONSTRAINT "reclamos_pkey" PRIMARY KEY ("id")
);
