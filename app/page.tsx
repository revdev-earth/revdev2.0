"use client";
import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";
import Cards2 from "@/components/Cards2";

const staggerDelay = 0.3; // Retraso entre la animación de cada div en segundos

const divVariant = (delay: number) => ({
  hidden: {
    opacity: 0,
    x: "25%", // Empieza fuera de la pantalla a la derecha
  },
  visible: {
    opacity: [0, 1, 1, 0, 0],
    x: ["25%", "0%", "0%", "-50%", "25%"], // Llega a su posición original a la izquierda
    transition: {
      duration: 10,
      delay,
      repeat: Infinity,
    },
  },
});

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
          variants={divVariant(0)}
          style={{ marginBottom: "1rem" }} // Espacio entre cada div
        >
          {/* Logra lo que deseas <br /> */}
          Erreiche, was du wünschst
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariant(staggerDelay)}
          style={{ marginBottom: "1rem" }}
        >
          {/* Esta a unos pasos <br /> */}
          Es ist nur noch ein paar Schritte entfernt
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={divVariant(staggerDelay * 2)}
        >
          {/* Hagamos que suceda <br /> */}
          Lass uns das geschehen
        </motion.div>
      </div>

      <Cards2 />

      <Carousel />
    </main>
  );
}
