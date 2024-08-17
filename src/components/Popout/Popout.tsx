import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DEFAULT_POPOUT_TIMEOUT } from "@constants/timout.constants";

const Popout = ({ popoutElement }: { popoutElement: React.ReactNode }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setShow(false);
    }, DEFAULT_POPOUT_TIMEOUT);

    return () => clearTimeout(timeout);
  }, []);

  const handleDismiss = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={handleDismiss}
          className="cursor-pointer"
        >
          {popoutElement}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popout;
