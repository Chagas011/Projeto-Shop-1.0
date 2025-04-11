import Image from "next/image";
import { useState } from "react";
export interface CarrouselProps {
  images: string[];
}

export default function Carrousel(props: CarrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = props;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className=" mt-36 grid  grid-cols-1 place-items-center gap-6 p-4 xl:grid-cols-2 xl:gap-x-3">
      <div className="relative h-[300px] w-[500px] md:h-[400px] md:w-[700px] xl:mx-0">
        <div className="relative size-full overflow-hidden rounded-2xl">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={500}
                className="size-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-gray-900/70 p-2 text-white hover:bg-gray-700"
          aria-label="Slide anterior"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-gray-900/70 p-2 text-white hover:bg-gray-700"
          aria-label="Próximo slide"
        >
          ▶
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`size-3 rounded-full transition-colors ${
                index === currentIndex ? "scale-110 bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="relative mx-auto h-[300px] w-[500px] md:h-[400px] md:w-[700px] xl:ml-20  xl:w-[500px]">
        <div className="relative size-full overflow-hidden rounded-2xl">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={500}
                height={500}
                className="size-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-gray-900/70 p-2 text-white hover:bg-gray-700"
          aria-label="Slide anterior"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-gray-900/70 p-2 text-white hover:bg-gray-700"
          aria-label="Próximo slide"
        >
          ▶
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`size-3 rounded-full transition-colors ${
                index === currentIndex ? "scale-110 bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between ">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599.99
        </span>
        <a
          href="#"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}
