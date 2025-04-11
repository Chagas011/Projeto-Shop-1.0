import { z } from "zod";
import { schemaFormLogin } from "./scheme";

export type FormPropsLogin = z.infer<typeof schemaFormLogin>;
export interface User {
  email: string;
  password: string;
}
