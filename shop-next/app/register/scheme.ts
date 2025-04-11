import { z } from "zod";

export const schemaForm = z.object({
  name: z.string().min(3, "Nome precisa ter no minimo 3 Caracteres"),
  email: z
    .string()
    .email("Infome um Email valido")
    .min(1, "Este campo é obrigatorio"),
  password: z.string().min(8, "Este Campo precisa ter no minimo 8 Caracteres"),
  role: z.string().min(1, "Este campo é obrigatorio"),
});
