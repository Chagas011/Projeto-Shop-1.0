"use client";
import NavBar from "../components/NavBar";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
  const { errors, handleFormSubmit, handleSubmit, register } = useProducts();

  return (
    <div className="flex h-screen flex-col dark:bg-gray-800">
      <NavBar />

      <main className="dark:bg-gray-800">
        <h1 className="mt-20 text-center font-semibold text-gray-800 dark:text-gray-50">
          Cadastro de Produtos
        </h1>
        <form
          className="mx-auto mb-10 max-w-sm p-5"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome
            </label>
            <input
              {...register("nome")}
              type="text"
              id="nome"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            {errors.nome?.message && (
              <p className="mb-2 text-red-500">{errors.nome.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Descrição
            </label>
            <input
              {...register("descricao")}
              type="text"
              id="description"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />

            {errors.descricao?.message && (
              <p className="mb-2 text-red-500">{errors.descricao.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Preço
            </label>
            <input
              {...register("preco")}
              type="text"
              id="price"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />

            {errors.preco?.message && (
              <p className="mb-2 text-red-500">{errors.preco.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Imagem
            </label>
            <input
              {...register("image")}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
              aria-describedby="user_avatar_help"
              id="image"
              type="text"
            />

            {errors.image?.message && (
              <p className="mb-2 text-red-500">{errors.image.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="star"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Star
            </label>
            <input
              {...register("star")}
              type="number"
              id="star"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />

            {errors.star?.message && (
              <p className="mb-2 text-red-500">{errors.star.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="categoria"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Categoria
            </label>
            <select
              {...register("categoria")}
              id="categoria"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="IPHONE">Iphone</option>
              <option value="MACBOOK">MacBook</option>
              <option value="WATCH">Watch</option>
              <option value="SALE">Sale</option>
            </select>

            {errors.categoria?.message && (
              <p className="mb-2 text-red-500">{errors.categoria.message}</p>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
