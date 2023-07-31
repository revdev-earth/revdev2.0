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
        className="flex flex-col justify-between mx-auto h-96 bg-gray-950 text-white
          xl:max-w-screen-xl 
        "
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-24 px-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">RevDev</div>
          </div>
        </div>

        <div className="flex items-center justify-center h-20 w-full ">
          © 2023 - Revdev 2.0 - All rights reserved.
        </div>
      </motion.footer>
    </>
  );
}
