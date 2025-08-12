/*
  Warnings:

  - The primary key for the `catastro` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."catastro" DROP CONSTRAINT "catastro_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "catastro_pkey" PRIMARY KEY ("id");
