"use client";
import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";
import Cards from "@/components/Cards";
import Services from "@/components/Services";

const staggerDelay = 0.3; // Retraso entre la animación de cada div en segundos

const divVariant = (delay: number) => ({
  initial: {
    opacity: 0,
    x: "25%", // Empieza fuera de la pantalla a la derecha
  },
  animate: {
    opacity: [0, 1, 1, 1, 1, 0, 0],
    x: ["25%", "0%", "0%", "0%", "-50%", "25%"], // Llega a su posición original a la izquierda
    transition: {
      repeat: Infinity,
      duration: 7,
      delay,
    },
  },
});

export default function Home() {
  return (
    <div
      className="
      flex flex-col justify-between  p-12 gap-8
      md:p-16 lg:p-24"
    >
      <div className="text-4xl md:text-6xl lg:text-8xl relative">
        <motion.div
          {...divVariant(0)}
          style={{ marginBottom: "1rem" }} // Espacio entre cada div
        >
          {/* Logra lo que deseas <br /> */}
          Erreiche, was du wünschst
        </motion.div>
        <motion.div
          {...divVariant(staggerDelay)}
          style={{ marginBottom: "1rem" }}
        >
          {/* Esta a unos pasos <br /> */}
          Es ist nur noch ein paar Schritte entfernt
        </motion.div>
        <motion.div {...divVariant(staggerDelay * 2)}>
          {/* Hagamos que suceda <br /> */}
          Lass uns das geschehen
        </motion.div>
      </div>

      <Cards />

      <Carousel />

      <Services />
    </div>
  );
}
