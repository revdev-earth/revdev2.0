"use client";
import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";
import Cards2 from "@/components/Cards2";

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

      <Cards2 />

      <Carousel />
    </main>
  );
}
