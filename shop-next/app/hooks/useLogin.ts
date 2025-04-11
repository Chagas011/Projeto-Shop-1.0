import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaFormLogin } from "../login/scheme";
import { FormPropsLogin } from "../login/types";

export const useLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsLogin>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleFormSubmit = (data: FormPropsLogin) => {
    console.log(data);
  };
  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
  };
};
