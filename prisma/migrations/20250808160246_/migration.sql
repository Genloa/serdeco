-- CreateTable
CREATE TABLE "public"."catastro" (
    "interlocutor" BIGINT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tarifa" TEXT,
    "cuentaContrato" BIGINT NOT NULL,
    "ptoSuministro" BIGINT NOT NULL,
    "monto" DECIMAL(18,2) NOT NULL,
    "cnae" BIGINT,
    "instalacion" TEXT,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "cicnor" TEXT NOT NULL,
    "cedula" TEXT,
    "fechalta" TEXT NOT NULL,
    "fechbaja" TEXT NOT NULL,
    "contrato" BIGINT NOT NULL,
    "telefono1" TEXT,
    "telefono2" TEXT,

    CONSTRAINT "catastro_pkey" PRIMARY KEY ("contrato")
);

-- AddForeignKey
ALTER TABLE "public"."catastro" ADD CONSTRAINT "operadora_catastro" FOREIGN KEY ("interlocutor") REFERENCES "public"."operadoras"("interlocutor") ON DELETE NO ACTION ON UPDATE NO ACTION;
