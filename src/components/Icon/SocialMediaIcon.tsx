"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Icon, IconProps } from "@iconify/react";
import { linkVariants } from "@constants/animation.constants";
export const SocialMediaIcon = memo(({ ...props }: IconProps) => {
  return (
    <motion.div
      className="bg-white text-dark rounded-full p-2"
      variants={linkVariants}
      whileTap={"tap"}
      whileHover={`hover`}
    >
      <Icon height={24} width={24} {...props} />
    </motion.div>
  );
});
