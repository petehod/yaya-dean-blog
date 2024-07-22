import { Variants } from "framer-motion";

export const linkVariants: Variants = {
  hover: {
    opacity: 0.9,
    scale: 1.03,
    transition: {
      duration: 0.2,
      bounce: 1,
    },
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.2,
    },
  },
  shake: {
    x: [0, 0.25, -0.25, 0.25, -0.25, 0],
    transition: {
      duration: 1,
    },
  },
};
