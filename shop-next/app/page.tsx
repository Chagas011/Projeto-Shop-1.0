"use client";
import Image from "next/image";
import Cards from "./components/Cards";
import Carrousel from "./components/Carrousel";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  const images = [
    "/watch.jpg",
    "/apple-watch.png",
    "/watch1.jpg",
    "/watch2.jpg",
    "/watch3.jpg",
  ];
  return (
    <div className="flex  h-screen flex-col dark:bg-gray-800">
      <NavBar />
      <div className="mx-auto w-full p-5 shadow-sm dark:bg-gray-800">
        <Carrousel images={images} />
      </div>

      <div className=" grid grid-cols-1 place-items-center items-center dark:bg-gray-800">
        <h3 className="mt-5 text-center text-3xl font-bold dark:text-gray-50">
          Conheça seu Relogio
        </h3>
        <p className="mt-2 text-center dark:text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque
          veniam adipisci velit, vel ex sequi repellat tempora? Saepe corrupti
          dolores iure provident unde. Enim deserunt ut esse tempora porro!
        </p>
      </div>

      <div className=" grid grid-cols-1 place-items-center items-center gap-4 p-3 pt-5 dark:bg-gray-800 md:grid-cols-3">
        <div className="flex justify-center">
          <Image
            src="/fundow1.jpg"
            alt="fundo"
            width={300}
            height={100}
            className="rounded-3xl"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/fundow2.jpg"
            alt="fundo"
            width={300}
            height={100}
            className="rounded-3xl"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/fundow3.jpg"
            alt="fundo"
            width={300}
            height={100}
            className="rounded-3xl"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
