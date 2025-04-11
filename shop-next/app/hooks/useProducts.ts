import { zodResolver } from "@hookform/resolvers/zod";

import { FormPropsProducts } from "../products/type";
import { schemaFormProducts } from "../products/scheme";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useProducts = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormPropsProducts>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaFormProducts),
    defaultValues: {
      descricao: "",
      image: "",
      nome: "",
      preco: "",
      star: "",
      categoria: "IPHONE",
    },
  });
  const handleFormSubmit = async (data: FormPropsProducts) => {
    try {
      await api.post("/products", {
        nome: data.nome,
        descricao: data.descricao,
        preco: parseFloat(data.preco),
        image: data.image,
        star: data.star,
        categoria: data.categoria,
      });
      toast.success("Produto cadastrado com sucesso");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      toast.error("Erro ao criar o produto.");
      console.log(err);
    }
  };
  return {
    errors,
    register,
    handleFormSubmit,
    handleSubmit,
  };
};
