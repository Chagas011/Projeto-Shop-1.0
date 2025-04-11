"use client";
import { useNav, useProfile } from "@/app/hooks/useNav";
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";

export default function NavBar() {
  const { handleToggleNav, navOpen } = useNav();
  const { handleToggleProfile, profileOpen } = useProfile();
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-16 w-full items-center rounded-md bg-gray-800 px-4 dark:bg-gray-50">
      <DarkThemeToggle />
      <span className="ml-3 text-lg font-extrabold dark:text-white">
        <a
          href="/"
          className="block px-4 py-2 text-2xl text-gray-200 hover:scale-110 hover:text-gray-400 dark:text-gray-800 hover:dark:text-gray-600"
        >
          ShopNext
        </a>
      </span>

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="ml-auto pr-5 md:hidden"
        type="button"
        onClick={handleToggleNav}
      >
        <Image
          src="/menu.svg"
          alt="nav"
          width={35}
          height={35}
          className="rounded-lg hover:scale-110 dark:invert"
        />
      </button>

      {navOpen && (
        <div
          id="dropdown"
          className="absolute right-4 top-14 w-44 divide-y divide-gray-100 rounded-lg bg-gray-700 shadow-sm dark:bg-gray-50"
        >
          <ul className="py-2 text-sm text-gray-50 dark:text-gray-700">
            <li>
              <a
                href="/iphones"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Iphone
              </a>
            </li>
            <li>
              <a
                href="/macbooks"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                MacBook
              </a>
            </li>
            <li>
              <a
                href="/watchs"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Apple Watch
              </a>
            </li>
            <li>
              <a
                href="/sales"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Ofertas
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Minha Conta
              </a>
            </li>
          </ul>
        </div>
      )}

      <ul className="mx-auto flex flex-row gap-4 py-2 text-sm text-gray-700 dark:text-gray-200 max-md:hidden">
        <li>
          <a
            href="/iphones"
            className="block px-4 py-2 text-2xl text-gray-200 hover:scale-105 hover:text-gray-400 dark:text-gray-800 hover:dark:text-gray-600"
          >
            Iphone
          </a>
        </li>
        <li>
          <a
            href="/macbooks"
            className="block px-4 py-2 text-2xl text-gray-200 hover:scale-105 hover:text-gray-400 dark:text-gray-800 hover:dark:text-gray-600"
          >
            MacBook
          </a>
        </li>
        <li>
          <a
            href="/watchs"
            className="block px-4 py-2 text-2xl text-gray-200 hover:scale-105 hover:text-gray-400 dark:text-gray-800 hover:dark:text-gray-600"
          >
            Apple Watch
          </a>
        </li>
        <li>
          <a
            href="/sales"
            className="block px-4 py-2 text-2xl text-gray-200 hover:scale-105 hover:text-gray-400 dark:text-gray-800 hover:dark:text-gray-600"
          >
            Ofertas
          </a>
        </li>
      </ul>
      <button type="button" onClick={handleToggleProfile}>
        <Image
          src="/profile.svg"
          alt="profile"
          width={35}
          height={35}
          className="rounded-2xl border p-1 dark:border-black"
        />
      </button>

      {profileOpen && (
        <div
          id="dropdown"
          className="absolute right-4 top-14 w-44 divide-y divide-gray-100 rounded-lg bg-gray-700 shadow-sm dark:bg-gray-50"
        >
          <ul className="py-2 text-sm text-gray-50 dark:text-gray-700">
            <li>
              <a
                href="/login"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cadastre-se
              </a>
            </li>

            <li>
              <a
                href="/products"
                className="block px-4 py-2 text-lg hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cadastrar Produtos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
