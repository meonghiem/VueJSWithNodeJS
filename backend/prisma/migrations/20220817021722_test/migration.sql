/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "account" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("account")
);

-- CreateTable
CREATE TABLE "Todo" (
    "account" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(200) NOT NULL,
    "is_done" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("account","id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_account_fkey" FOREIGN KEY ("account") REFERENCES "User"("account") ON DELETE RESTRICT ON UPDATE CASCADE;
