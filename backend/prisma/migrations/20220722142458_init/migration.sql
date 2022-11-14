-- DropIndex
DROP INDEX "user_account_key";

-- AlterTable
ALTER TABLE "user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("account");
