"use client";
import { NAV_LINKS } from "@constants/links.constants";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { linkVariants } from "@constants/animation.constants";
export const Nav = memo(() => {
  return (
    <nav className="flex gap-4">
      {NAV_LINKS.map((link) => (
        <motion.div
          key={link.name}
          variants={linkVariants}
          whileTap={`tap`}
          whileHover={`hover`}
        >
          <Link href={link.link}>{link.name}</Link>
        </motion.div>
      ))}
    </nav>
  );
});
