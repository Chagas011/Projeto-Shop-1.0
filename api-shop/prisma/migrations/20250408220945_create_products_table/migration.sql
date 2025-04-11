-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "star" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
