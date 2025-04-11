"use client";

import NavBar from "../components/NavBar";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { errors, handleFormSubmit, handleSubmit, register } = useLogin();

  return (
    <div className="flex h-screen flex-col dark:bg-gray-800">
      <NavBar />

      <main className="">
        <form
          className="mx-auto mt-40 max-w-sm"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h1 className="mt-20 text-center font-semibold text-gray-800 dark:text-gray-50">
            Login
          </h1>
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

          <div className="mt-5 grid grid-cols-1">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
