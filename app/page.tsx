"use client";
import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";

const staggerDelay = 0.2; // Retraso entre la animación de cada div en segundos

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
    <main className="flex min-h-screen flex-col justify-between p-12 md:p-16 lg:p-24">
      <div className="text-4xl md:text-6xl lg:text-8xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariants}
          transition={{
            duration: 0.5, // Duración de la animación de cada div en segundos
          }}
          style={{ marginBottom: "1rem" }} // Espacio entre cada div
        >
          Lo que quieres
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariants}
          transition={{
            duration: 0.5,
            delay: staggerDelay, // Retraso entre la animación de este div y el anterior
          }}
          style={{ marginBottom: "1rem" }}
        >
          Esta aqui
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariants}
          transition={{
            duration: 0.5,
            delay: staggerDelay * 2, // Retraso entre la animación de este div y el anterior
          }}
        >
          Siguenos
        </motion.div>
      </div>

      <div>
        {/* <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        /> */}
      </div>

      <Carousel />
    </main>
  );
}
