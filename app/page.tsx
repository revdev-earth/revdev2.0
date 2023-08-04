"use client";
import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import { useState } from "react";

const staggerDelay = 0.3; // Retraso entre la animación de cada div en segundos

const divVariants = {
  hidden: {
    opacity: 0,
    x: "25%", // Empieza fuera de la pantalla a la derecha
  },
  visible: {
    opacity: 1,
    x: "0%", // Llega a su posición original a la izquierda
  },
};

export default function Home() {
  return (
    <main
      className="
      flex flex-col justify-between p-12 gap-8
      md:p-16 
      lg:p-24"
    >
      <div className="text-4xl md:text-6xl lg:text-8xl relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariants}
          transition={{
            duration: 1, // Duración de la animación de cada div en segundos
          }}
          style={{ marginBottom: "1rem" }} // Espacio entre cada div
        >
          Logra lo que deseas
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariants}
          transition={{
            duration: 1,
            delay: staggerDelay, // Retraso entre la animación de este div y el anterior
          }}
          style={{ marginBottom: "1rem" }}
        >
          Esta a unos pasos
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariants}
          transition={{
            duration: 1,
            delay: staggerDelay * 2, // Retraso entre la animación de este div y el anterior
          }}
        >
          Hagamos que suceda
        </motion.div>
      </div>

      <Cards />

      <Carousel />

      <div className="h-96" />
    </main>
  );
}

const Cards = () => {
  const [active, setActive] = useState(false);
  const [number, setNumber] = useState<number>();

  const clickCard = (num: number) => {
    if (!active) {
      setActive(true);
      setNumber(num);
    } else {
      if (active && num !== number) {
        setNumber(num);
      } else {
        setActive(false);
        setNumber(undefined);
      }
    }
    return () => {
      setNumber(undefined);
      setActive(false);
    };
  };

  return (
    <div className="relative h-[400px] my-4">
      <div
        className={`flex absolute ${number === 1 ? "right-0" : "left-0"}`}
        onClick={() => clickCard(1)}
      >
        <div
          className={` ${
            active && number === 1 ? "flex flex-col" : "hidden"
          }  w-60 `}
        >
          <h3>Nosotros</h3>
          <p>Estos somos nosotros</p>
          <p>Quiers saber mas?</p>
        </div>
        <Image
          src="/images/rezar.jpeg"
          alt="Rezar"
          className="w-[400px] h-[400px]"
          width={100}
          height={24}
          priority
        />
      </div>

      <div
        className={`flex absolute ${number === 2 ? "right-0" : "left-4"}`}
        onClick={() => clickCard(2)}
      >
        <div
          className={` ${
            active && number === 2 ? "flex flex-col" : "hidden"
          }  w-60 `}
        >
          <h3>Ustedes</h3>
          <p>Estos son ustedes</p>
          <p>Quiers ver como nos ayudamos?</p>
        </div>
        <Image
          src="/images/agua_2.jpeg"
          alt="Agua 2"
          className="w-[400px] h-[400px]"
          width={100}
          height={24}
          priority
        />
      </div>

      <div
        className={`flex absolute ${number === 3 ? "right-0" : "left-10"}`}
        onClick={() => clickCard(3)}
      >
        <div
          className={` ${
            active && number === 3 ? "flex flex-col" : "hidden"
          }  w-60 `}
        >
          <h3>Carreras</h3>
          <p>Quieres ser parte?</p>
          <p>Mira como!</p>
        </div>
        <Image
          src="/images/agua_3.jpeg"
          alt="Agua 3"
          className="w-[400px] h-[400px]"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
};
