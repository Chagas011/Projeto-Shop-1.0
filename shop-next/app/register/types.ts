import { z } from "zod";
import { schemaForm } from "./scheme";

export enum UserRole {
  Admin = "admin",
  Customer = "customer",
}
export type FormProps = z.infer<typeof schemaForm>;
export interface User {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
