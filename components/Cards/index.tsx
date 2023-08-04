import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cardStyle = {
  width: "400px",
  height: "400px",
};

const transition = { duration: 1, ease: "easeInOut" };

const cardsData = [
  {
    title: "Nosotros",
    description: "Estos somos nosotros. ¿Quieres saber más?",
    imageSrc: "/images/rezar.jpeg",
    alt: "Rezar",
    leftOffset: "0",
  },
  {
    title: "Ustedes",
    description: "Estos son ustedes. ¿Quieres ver cómo nos ayudamos?",
    imageSrc: "/images/agua_2.jpeg",
    alt: "Agua 2",
    leftOffset: "10",
  },
  {
    title: "Carreras",
    description: "¿Quieres ser parte? Mira cómo!",
    imageSrc: "/images/agua_3.jpeg",
    alt: "Agua 3",
    leftOffset: "20",
  },
];

const Card = ({ data, active, onClick }: any) => {
  const { title, description, imageSrc, alt, leftOffset } = data;
  const isActive = active === title;

  return (
    <motion.div
      className={`flex absolute bg-slate-300 rounded-md overflow-hidden cursor-pointer left-${leftOffset}`}
      onClick={() => onClick(isActive ? undefined : title)}
      initial={{ x: 0, zIndex: isActive ? 1 : 0 }}
      animate={{ x: isActive ? "100%" : 0 }}
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
        className="w-[400px] h-[400px]"
        width={100}
        height={24}
        style={cardStyle}
        priority
      />
    </motion.div>
  );
};

export default function Cards() {
  const [active, setActive] = useState();

  const clickCard = (title: any) => {
    setActive((prev) => (prev === title ? undefined : title));
  };

  return (
    <div className="relative h-[400px] my-4">
      {cardsData.map((card, index) => (
        <Card key={index} data={card} active={active} onClick={clickCard} />
      ))}
    </div>
  );
}
