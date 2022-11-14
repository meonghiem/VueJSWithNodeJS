-- CreateTable
CREATE TABLE "user" (
    "account" TEXT NOT NULL,
    "password" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "user_account_key" ON "user"("account");
