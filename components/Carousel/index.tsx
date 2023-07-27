import Image from "next/image";
import { motion } from "framer-motion";
import AnimationDiv from "../AnimationDiv";

const images = [
  "vercel.svg",
  "vercel.svg",
  "vercel.svg",
  "vercel.svg",
  "vercel.svg",
  "vercel.svg",
  "vercel.svg",
  "vercel.svg",
];

export function Carousel() {
  return (
    <AnimationDiv>
      <div className="overflow-hidden">
        {[...Array(1)].map((_, i) => (
          <motion.div
            key={i}
            className="flex"
            animate={{
              x: ["0%", "-500%"],
            }}
            transition={{
              duration: 25,
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
