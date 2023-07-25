"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const staggerDelay = 0.2; // Retraso entre la animación de cada div en segundos

const divVariants = {
  hidden: {
    opacity: 0,
    x: "10%", // Empieza fuera de la pantalla a la derecha
  },
  visible: {
    opacity: 1,
    x: "0%", // Llega a su posición original a la izquierda
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="text-8xl">
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
    </main>
  );
}
