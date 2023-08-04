import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const transition = { duration: 1, ease: "easeInOut" };

const cardsData = [
  {
    title: "Nosotros",
    description: "Estos somos nosotros. ¿Quieres saber más?",
    imageSrc: "/images/rezar.jpeg",
    alt: "Rezar",
    leftOffset: "0%",
  },
  {
    title: "Ustedes",
    description: "Estos son ustedes. ¿Quieres ver cómo nos ayudamos?",
    imageSrc: "/images/agua_2.jpeg",
    alt: "Agua 2",
    leftOffset: "5%",
  },
  {
    title: "Carreras",
    description: "¿Quieres ser parte? Mira cómo!",
    imageSrc: "/images/agua_3.jpeg",
    alt: "Agua 3",
    leftOffset: "10%",
  },
];

export default function Cards2() {
  const [active, setActive] = useState();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const clickCard = (title: any) => {
    setActive((prev) => (prev === title ? undefined : title));
  };

  useEffect(() => {
    // Actualizar el tamaño de la ventana en cada cambio
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Llamar al inicio para obtener el ancho inicial
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calcular el valor de leftOffset en función del porcentaje de la ventana
  const percentageLeftOffset = windowWidth - (600 + 200);

  // Establecer el ancho de la tarjeta en función del tamaño de la ventana
  let cardSize = 400; // Por defecto, el ancho de la tarjeta es 400px

  if (windowWidth <= 375) {
    cardSize = 300; // Si la ventana tiene un ancho menor o igual a 375px, el ancho de la tarjeta es 300px
  } else if (windowWidth <= 425) {
    cardSize = 350; // Si la ventana tiene un ancho menor o igual a 425px, el ancho de la tarjeta es 350px
  } else if (windowWidth <= 768) {
    cardSize = 200; // Si la ventana tiene un ancho menor o igual a 768px, el ancho de la tarjeta es 200px
  }

  console.log(windowWidth, cardSize);

  return (
    <div className="relative h-[400px] my-20">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          data={card}
          onClick={clickCard}
          {...{ windowWidth, percentageLeftOffset, active, cardSize }}
        />
      ))}
    </div>
  );
}

const Card = ({ data, active, onClick, windowWidth, cardSize }: any) => {
  const { title, description, imageSrc, alt, leftOffset } = data;

  const isActive = active === title;

  return (
    <motion.div
      className={`flex absolute bg-slate-300 rounded-md overflow-hidden cursor-pointer`}
      onClick={() => onClick(isActive ? undefined : title)}
      initial={{
        opacity: 0,
        x: leftOffset,
        zIndex: isActive ? 1 : 0,
      }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        x: isActive ? 0 : leftOffset,
        zIndex: isActive ? 1 : 0,
      }}
      whileHover={{ scale: 1.02, zIndex: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={transition}
    >
      <motion.div
        className={`flex flex-col ${isActive ? "w-20" : "w-0"}`}
        initial={{ opacity: 0, width: 0, padding: "0" }}
        animate={{
          width: isActive ? "200px" : 0,
          padding: isActive ? "1rem" : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p>{description}</p>
      </motion.div>
      <Image
        src={imageSrc}
        alt={alt}
        className={`w-${cardSize} h-${cardSize}`}
        width={windowWidth}
        height={windowWidth}
        priority
      />
    </motion.div>
  );
};
