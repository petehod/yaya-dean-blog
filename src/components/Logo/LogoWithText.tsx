"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HOME_LINK } from "@constants/links.constants";
import { linkVariants } from "@constants/animation.constants";
export const LogoWithText = () => {
  return (
    <motion.div variants={linkVariants} whileHover={"hover"} whileTap={"tap"}>
      <Link href={HOME_LINK}>
        <Image
          alt="logo for dean"
          src={"/assets/images/logo-with-text.png"}
          height={20}
          width={120}
        />
      </Link>
    </motion.div>
  );
};
