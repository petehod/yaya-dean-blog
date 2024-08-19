import { motion } from "framer-motion";
import { MyLink } from "@components/Link";
import { GLG_LINK } from "@constants/links.constants";
import Image from "next/image";

const DeanPopout = () => {
  return (
    <motion.div
      className="fixed top-1/2 max-w-16 gap-2 w-full right-0 flex flex-col justify-between items-end  py-4 px-6"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{
        x: {
          type: "tween",
          duration: 0.5, // Quick slide-in
          ease: "easeInOut",
        },
        default: {
          delay: 4, // Hold for 4000ms before sliding out
          duration: 0.5, // Quick slide-out
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative h-24 w-24 mt-auto">
        <Image
          alt="dean as a cartoon avatar in the style of Disney"
          src={"/assets/images/dean-avatar.png"}
          height={96}
          width={96}
        />
      </div>
      <div className={`bg-white rounded text-dark w-full p-2 `}>
        <p className="font-semibold">Guitar Loop God is now live!</p>
        <Image
          alt="guitar loop god by dean"
          src="/assets/images/loop-formula-page-1.png"
          height={24}
          width={24}
        />
        <MyLink href={GLG_LINK}>Get it here </MyLink>
      </div>
    </motion.div>
  );
};

export default DeanPopout;
