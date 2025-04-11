import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormProps } from "../register/types";
import { schemaForm } from "../register/scheme";

export const useRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      role: "",
    },
  });

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };
  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
  };
};
