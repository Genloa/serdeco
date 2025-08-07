-- CreateTable
CREATE TABLE "public"."oficinas_atencion" (
    "id" SERIAL NOT NULL,
    "nombre" CHAR(120) NOT NULL,
    "estado" CHAR(120) NOT NULL,
    "municipio" CHAR(120) NOT NULL,
    "direccion" CHAR(255) NOT NULL,
    "telefono" CHAR(50),
    "correo" CHAR(100),
    "horario" CHAR(100),
    "estatus" CHAR(50),

    CONSTRAINT "oficinas_atencion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."preguntas_frecuentes" (
    "id" SERIAL NOT NULL,
    "pregunta" CHAR(255) NOT NULL,
    "respuesta" TEXT NOT NULL,
    "estatus" CHAR(50),

    CONSTRAINT "preguntas_frecuentes_pkey" PRIMARY KEY ("id")
);
