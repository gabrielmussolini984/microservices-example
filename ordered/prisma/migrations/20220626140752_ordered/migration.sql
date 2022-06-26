-- CreateTable
CREATE TABLE "Ordered" (
    "id" SERIAL NOT NULL,
    "products" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ordered_pkey" PRIMARY KEY ("id")
);
