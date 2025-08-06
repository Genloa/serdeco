-- CreateTable
CREATE TABLE "public"."operadoras" (
    "interlocutor" BIGINT NOT NULL,
    "nombre" CHAR(120) NOT NULL,
    "estado" CHAR(120) NOT NULL,
    "municipio" CHAR(120) NOT NULL,
    "servicio" CHAR(120) NOT NULL,
    "url" CHAR(255),
    "logo" CHAR(255),
    "estatus" CHAR(50),

    CONSTRAINT "operadoras_pkey" PRIMARY KEY ("interlocutor")
);
