"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Hamburg from "@/components/Hamburg";
import Arrow from "../svgs/Arrow";

import "./style.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <motion.header
      className="
        relative bg-[rgba(42,42,42,0)] 
        md:h-20
      "
      initial={{
        opacity: 0,
        top: "-80px",
      }}
      animate={{
        opacity: 1,
        top: "0px",
        transition: { duration: 1 },
      }}
    >
      <div
        className={`
        m-auto
          flex flex-col  items-center justify-between w-full uppercase p-3 
          md:pl-[7%] md:pr-[5%] lg:pl-[2.8%] md:flex-row md:h-20 h-auto  bg-[#E4E3E3]
          xl:w-[1280px]
          `}
      >
        <div className="relative
          flex  justify-end sm:justify-center md:justify-around items-center
          w-full md:w-auto h-[57px] ">
          <Link className=" absolute sm:relative  lg:relative inset-0 m-auto h-fit capitalize text-3xl text-center" href="/">
            RevDev
          </Link>
          <div className="absolute right-0 pr-5 md:hidden">
            <Hamburg onChange={setIsMenuOpen} />
          </div>
        </div>

        <nav
          className={` flex flex-row flex-wrap  text-black dark:text-white content-center 
            gap-4 gap-y-2 
            md:justify-end md:gap-y-0.5 
            lg:gap-10 
            h-[137px] sm:h-[90px]
           ${!isMenuOpen && "hidden md:flex"} mt-4 md:mt-0 transition-all`}
        >
          {[
            { name: "Services", link: "/services" },
            { name: "Us", link: "/us" },
            { name: "Careers", link: "/careers" },
          ].map((item, i) => {
            return (
              <div
                key={i}
                className={` ${
                  item.name === "conéctate" && "conectate relative"
                } transition-all`}
              >
                <Link
                  href={item.link}
                  className={`hover:text-cyan-500 bg- ${
                    pathname === item.link && "text-cyan-500"
                  } flex items-center transition-all`}
                >
                  {item.name}
                  {item.name === "conéctate" && (
                    <Arrow
                      className={`ml-1 ${
                        pathname === item.link && "fill-cyan-500"
                      }`}
                    />
                  )}
                </Link>

                {item.name === "conéctate" && <OtroMenu />}
              </div>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

const OtroMenu = () => (
  <div
    className="
      otro-menu absolute z-10 text-black w-60 hidden lg:block 
    "
  >
    <div className="h-2 bg-pink-300 rounded-t-xl " />
    <div className="flex flex-col gap-4 bg-[#D4EBF170] p-3">
      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#modelo"
      >
        Modelo de desempeño
      </Link>
      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#familia"
      >
        Salud en familia
      </Link>
      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#ejecutivos"
      >
        Ejecutivo
      </Link>
      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#psicoterapia"
      >
        Psicoterapia
      </Link>
      <Link className="hover:text-pink-300 cursor-pointer" href="/conectate">
        Bootcamp
      </Link>
    </div>
  </div>
);
