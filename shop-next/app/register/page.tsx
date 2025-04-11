"use client";

import NavBar from "../components/NavBar";
import { useRegister } from "../hooks/useRegister";

export default function Register() {
  const { errors, handleFormSubmit, handleSubmit, register } = useRegister();

  return (
    <div className="flex h-screen flex-col dark:bg-gray-800">
      <NavBar />

      <main className="">
        <h1 className="mt-20 text-center text-gray-800 dark:text-gray-50">
          {" "}
          Formulario Cadastro
        </h1>

        <form
          className="mx-auto mt-20 max-w-sm"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="name@flowbite.com"
            />
            {errors.email?.message && (
              <p className="mb-2 text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
            {errors.name?.message && (
              <p className="mb-2 text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-400 bg-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />

            {errors.password?.message && (
              <p className="mb-2 text-red-500">{errors.password.message}</p>
            )}
          </div>

          <label
            htmlFor="role"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Select your Role
          </label>
          <select
            {...register("role")}
            id="role"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option>admin</option>
            <option>customer</option>
          </select>
          {errors.role?.message && (
            <p className="mb-2 text-red-500">{errors.role.message}</p>
          )}

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
