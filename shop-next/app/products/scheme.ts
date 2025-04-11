import { z } from "zod";

export const schemaFormProducts = z.object({
  nome: z.string().min(1, "Campo obrigatorio"),
  descricao: z.string().min(1, "Campo obrigatorio"),
  preco: z.string().min(1, "Campo obrigatorio"),
  star: z.string().min(1, "Campo obrigatorio"),
  image: z.string(),
  categoria: z.enum(["IPHONE", "MACBOOK", "WATCH", "SALE"]),
});
