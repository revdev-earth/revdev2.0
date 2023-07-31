"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [reloadAnimation, setReloadAnimation] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setReloadAnimation(false);
    setReloadAnimation(true);
  }, [pathname]);

  return (
    <>
      <motion.footer
        animate={{
          opacity: [0, 1],
        }}
        className="xl:max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-24 px-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">RevDev</div>
          </div>
        </div>
      </motion.footer>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="flex items-center justify-center h-20 w-full "
      >
        ©2023 Revdev 2.0 All rights reserved
      </motion.div>
    </>
  );
}
