import { z } from "zod";
import { schemaFormProducts } from "./scheme";

export type FormPropsProducts = z.infer<typeof schemaFormProducts>;
