"use client";
import { NAV_LINKS } from "@constants/links.constants";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { linkVariants } from "@constants/animation.constants";
import { useScreenWidth } from "@hooks/index";
import { HamburgerMenu } from "./HamburgerMenu";
export const Nav = memo(() => {
  const screenWidth = useScreenWidth();

  if (screenWidth < 640) {
    return <HamburgerMenu />;
  }

  return (
    <nav className="flex gap-8">
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
