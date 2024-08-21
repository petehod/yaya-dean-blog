"use client";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { motion } from "framer-motion";
import { linkVariants } from "@constants/animation.constants";
import { BlogPost } from "types/blog.types";

export const ArticlePreview = memo(({ slug, description, title, date, coverImage }: BlogPost) => {
  console.log(coverImage);
  return (
    <div className="relative">
      <motion.div
        key={slug}
        variants={linkVariants}
        whileTap={`tap`}
        whileHover={`hover`}
        className="bg-dark rounded cursor-pointer p-6 z-10"
      >
        <Link className={`flex items-start justify-start gap-4`} href={`/posts/${slug}`}>
          <div className={`flex flex-col items-start `}>
            <h2 className="text-1.5 font-semibold mb-2 ">{title}</h2>
            <p className=" mb-4">{description}</p>
            <p className="text-sm ">{new Date(date).toLocaleDateString()}</p>
          </div>
        </Link>
      </motion.div>
      {coverImage && (
        <Image
          src={`/assets/images/${coverImage}`}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0 opacity-10 pointer-events-none"
        />
      )}
    </div>
  );
});
