-- CreateTable
CREATE TABLE "Session" (
    "sid" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");
