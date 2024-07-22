type ButtonOutlineProps = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  text: string;
};
import { linkVariants } from "@constants/animation.constants";
import { motion } from "framer-motion";
export const ButtonOutline = ({
  disabled,
  type = "button",
  text,
}: ButtonOutlineProps) => {
  return (
    <motion.button
      variants={linkVariants}
      whileTap={`tap`}
      whileHover={`hover`}
      className="h-12 bg-transparent border-2 border-white rounded w-full"
      disabled={disabled}
      type={type}
    >
      {text}
    </motion.button>
  );
};
