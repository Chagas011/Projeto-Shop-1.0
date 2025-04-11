import { z } from "zod";

export const schemaFormLogin = z.object({
  email: z
    .string()
    .email("Infome um Email valido")
    .min(1, "Este campo é obrigatorio"),
  password: z.string().min(8, "Este Campo precisa ter no minimo 8 Caracteres"),
});
