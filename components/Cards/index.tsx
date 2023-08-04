"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cardStyle = {
  width: "400px",
  height: "400px",
};

const transition = { duration: 1, ease: "easeInOut" };

export default function Cards() {
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
      {/* Card 1 */}
      <motion.div
        className={`flex absolute left-0`}
        onClick={() => clickCard(1)}
        initial={{ x: 0 }}
        animate={{ x: active && number === 1 ? "100%" : 0 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={transition}
      >
        <motion.div
          className={` 
            flex flex-col overflow-hidden ${
              active && number === 1 ? "w-20" : "w-0"
            } `}
          initial={{ width: 0 }}
          animate={{ width: active && number === 1 ? "200px" : 0 }}
          transition={transition}
        >
          <h3>Nosotros</h3>
          <p>Estos somos nosotros</p>
          <p>¿Quieres saber más?</p>
        </motion.div>
        <Image
          src="/images/rezar.jpeg"
          alt="Rezar"
          className="w-[400px] h-[400px]"
          width={100}
          height={24}
          style={cardStyle}
          priority
        />
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className={`flex absolute left-10`}
        onClick={() => clickCard(2)}
        initial={{ x: 0 }}
        animate={{ x: active && number === 2 ? "100%" : 0 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={transition}
      >
        <motion.div
          className={` 
            flex flex-col overflow-hidden ${
              active && number === 2 ? "w-20" : "w-0"
            } `}
          initial={{ width: 0 }}
          animate={{ width: active && number === 2 ? "200px" : 0 }}
          transition={transition}
        >
          <h3>Ustedes</h3>
          <p>Estos son ustedes</p>
          <p>¿Quieres ver cómo nos ayudamos?</p>
        </motion.div>
        <Image
          src="/images/agua_2.jpeg"
          alt="Agua 2"
          className="w-[400px] h-[400px]"
          width={100}
          height={24}
          style={cardStyle}
          priority
        />
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className={`flex absolute left-20`}
        onClick={() => clickCard(3)}
        initial={{ x: 0 }}
        animate={{ x: active && number === 3 ? "100%" : 0 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={transition}
      >
        <motion.div
          className={` 
            flex flex-col overflow-hidden ${
              active && number === 3 ? "w-20" : "w-0"
            } `}
          initial={{ width: 0 }}
          animate={{ width: active && number === 3 ? "200px" : 0 }}
          transition={transition}
        >
          <h3>Carreras</h3>
          <p>¿Quieres ser parte?</p>
          <p>Mira cómo!</p>
        </motion.div>
        <Image
          src="/images/agua_3.jpeg"
          alt="Agua 3"
          className="w-[400px] h-[400px]"
          width={100}
          height={24}
          style={cardStyle}
          priority
        />
      </motion.div>
    </div>
  );
}
