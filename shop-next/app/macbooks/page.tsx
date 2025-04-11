"use client";

import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Products } from "../types/product";
import { api } from "../services/api";

export default function MacBooks() {
  const [macbooks, setmacbooks] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");
        const macBooks = data.filter(
          (item: Products) => item.categoria === "MACBOOK",
        );
        setmacbooks(macBooks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="flex h-screen flex-col">
      <NavBar />

      <main className="dark:bg-gray-800">
        <h1 className="mt-20 text-center text-gray-800 dark:text-gray-50">
          {" "}
          MACBOOKS
        </h1>
        <Cards produtos={macbooks} />
      </main>

      <Footer />
    </div>
  );
}
