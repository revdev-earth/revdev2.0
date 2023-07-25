"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function AnimationMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 1,
            },
          },
        }}
        {...{ className }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
