"use client";
import { ArticleDetails } from "types/article.types";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { linkVariants } from "@constants/animation.constants";
import { BlogPost } from "types/blog.types";
import Image from "next/image";
import { ArticlePreviewImage } from "./ArticlePreviewImage";
export const ArticlePreview = memo(
  ({
    slug,
    description,
    title,
    date,
    content,
    author,
    coverImage,
    tags,
  }: BlogPost) => {
    return (
      <motion.div
        key={slug}
        variants={linkVariants}
        whileTap={`tap`}
        whileHover={`hover`}
        className="bg-dark rounded cursor-pointer p-6"
      >
        <Link
          className={`flex items-start justify-start gap-4`}
          href={`/posts/${slug}`}
        >
          {coverImage && <ArticlePreviewImage src={coverImage} title={title} />}
          <div className={`flex flex-col items-start `}>
            <h2 className="text-1.5 font-semibold mb-2 ">{title}</h2>
            <p className=" mb-4">{description}</p>
            <p className="text-sm ">{new Date(date).toLocaleDateString()}</p>
          </div>
        </Link>
      </motion.div>
    );
  }
);
