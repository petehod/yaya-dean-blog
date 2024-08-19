"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const heightOffset = 200;

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight - heightOffset;

    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollWidth < 0.25) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-light z-50">
      {scrollWidth >= 95 && <Confetti />}
      <motion.div
        className="h-1.5 bg-primary   "
        style={{ width: `${scrollWidth}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollWidth}%` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </div>
  );
};

export default ScrollProgress;
