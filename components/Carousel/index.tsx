import Image from "next/image";
import { motion } from "framer-motion";
import AnimationDiv from "../AnimationDiv";

const images = [
  "vercel.svg",
  "next.svg",
  "vercel.svg",
  "next.svg",
  "vercel.svg",
  "next.svg",
  "vercel.svg",
  "next.svg",
];

export function Carousel() {
  return (
    <AnimationDiv>
      <div className="overflow-hidden h-80">
        {[...Array(1)].map((_, i) => (
          <motion.div
            key={i}
            className="flex dark:invert gap-10 h-full"
            animate={{
              x: ["0%", "-500%"],
            }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={`/${image}`}
                alt={`Slide ${index}`}
                width={50}
                height={50}
                priority
                className="w-full h-full object-cover"
              />
            ))}
          </motion.div>
        ))}
      </div>
    </AnimationDiv>
  );
}
