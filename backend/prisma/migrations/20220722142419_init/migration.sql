/*
  Warnings:

  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);
