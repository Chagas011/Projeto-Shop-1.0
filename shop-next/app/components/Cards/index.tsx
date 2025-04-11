import Image from "next/image";
import Watch from "../../../public/apple-watch.png";
import { Products } from "@/app/types/product";

export interface CardsProps {
  produtos: Products[];
}

export default function Cards(props: CardsProps) {
  return (
    <div className="mt-14 grid grid-cols-1 place-items-center items-center gap-6 p-4 md:grid-cols-3 xl:grid-cols-4">
      {props.produtos.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <a href="#">
            <Image src={product.image} alt="image" width={350} height={300} />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.nome}
              </h5>
            </a>

            <div className="mb-5 mt-2.5 flex items-center">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(Number(product.star))].map((_, index) => (
                  <svg
                    key={index}
                    className="size-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="ms-3 rounded-sm bg-blue-200 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {product.star}
              </span>
            </div>
            <div className="flex items-center justify-between">
              {product.categoria === "SALE" ? (
                <div className="flex flex-col items-start">
                  <span className="text-sm text-gray-500 line-through">
                    R$ {Number(product.preco).toFixed(2)}
                  </span>
                  <span className="text-2xl font-bold text-red-600">
                    R$ {(Number(product.preco) * 0.8).toFixed(2)}{" "}
                    {/* 20% de desconto */}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  R$ {Number(product.preco).toFixed(2)}
                </span>
              )}

              <a
                href="#"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
