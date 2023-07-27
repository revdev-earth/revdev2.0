"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Hamburg from "@/components/Hamburg";
import { motion } from "framer-motion";

import "./style.css";
import Arrow from "../svgs/Arrow";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reloadAnimation, setReloadAnimation] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setReloadAnimation(false);

    setTimeout(() => {
      setReloadAnimation(true);
    }, 1000);
  }, [pathname]);

  return (
    <motion.header
      className="
        relative bg-[rgba(42,42,42,0)] 
        md:h-20
      "
      // initial={reloadAnimation ? "hidden" : "visible"}
      // animate={reloadAnimation ? "visible" : "hidden"}

      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          opacity: 0,
          top: "-80px",
        },
        visible: {
          opacity: 1,
          top: "0px",
          transition: {
            duration: 1,
          },
        },
      }}
    >
      <div
        className="
          flex flex-col  items-center justify-between w-full uppercase p-5
          md:pl-[7%] md:pr-[5%] md:flex-row md:h-20 sm:p-0
          "
      >
        <div className="flex justify-between md:justify-around w-full items-center md:w-auto">
          <Link className="h-fit capitalize text-lg" href="/">
            RevDev
          </Link>

          <div className="md:hidden">
            <Hamburg onChange={setIsMenuOpen} />
          </div>
        </div>

        <nav
          className={` flex flex-row flex-wrap  text-black dark:text-white content-center 
            gap-4 gap-y-2 
            md:justify-end md:gap-y-0.5 
            lg:gap-10 
           ${!isMenuOpen && "hidden md:flex"} mt-4 md:mt-0 transition-all`}
        >
          {[
            { name: "expertise", link: "/expertise" },
            { name: "services", link: "/services" },
            { name: "carta", link: "/carta" },
            { name: "company", link: "/company" },
            { name: "carrers", link: "/carrers" },
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
                  className={`hover:text-purple-500 ${
                    pathname === item.link && "text-purple-500"
                  } flex items-center transition-all`}
                >
                  {item.name}
                  {item.name === "conéctate" && (
                    <Arrow
                      className={`ml-1 ${
                        pathname === item.link && "fill-purple-500"
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
