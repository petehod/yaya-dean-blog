"use client";
import { linkVariants } from "@constants/animation.constants";
import { NAV_LINKS } from "@constants/links.constants";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { memo, useState } from "react";
import { Hamburger } from "./Hamburger";

export const HamburgerMenu = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative md:hidden`}>
      <div
        className={`flex flex-col justify-between w-8 h-8 cursor-pointer   z-50 ${isOpen ? "fixed top-4 right-4" : ""}`}
        onClick={toggleMenu}
      >
        <Hamburger onOpen={isOpen} onToggle={toggleMenu} />
      </div>

      <nav
        className={`fixed pt-12 top-0 left-0 w-full h-full bg-white text-dark transition-transform duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${isOpen ? "visible" : "invisible"}`}
      >
        <ul className="list-none p-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} className="w-full h-full" href={link.link}>
              <motion.div
                variants={linkVariants}
                whileTap={`tap`}
                whileHover={`hover`}
                className="py-2 px-4 border-b border-gray-200 last:border-none hover:bg-gray-100"
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
});
