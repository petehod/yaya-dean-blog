import { DEFAULT_POST_IMAGE_HEIGHT, DEFAULT_POST_IMAGE_WIDTH } from "@constants/image.constants";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { linkVariants } from "@constants/animation.constants";
import { ImageModal } from "./ImageModal";

export const PostImage = ({
  alt,
  height = DEFAULT_POST_IMAGE_HEIGHT,
  containerWidth = DEFAULT_POST_IMAGE_WIDTH,
  objectFit = "cover",
  caption,
  ...props
}: ImageProps & {
  alt: string;
  height: number;
  containerWidth: string | number;
  objectFit: "cover" | "contain";
  caption?: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`w-full mb-4`}>
      <motion.div
        className={`relative cursor-pointer mb-4`}
        style={{
          height,
          width: containerWidth,
        }}
        onClick={handleImageClick}
        variants={linkVariants}
        whileTap={`tap`}
        whileHover={`hover`}
      >
        <Image alt={alt} fill className={`object-${objectFit} rounded`} {...props} />
      </motion.div>
      {caption}

      {isModalOpen && <ImageModal onClose={closeModal} alt={alt} {...props} />}
    </div>
  );
};
