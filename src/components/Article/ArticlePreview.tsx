"use client";
import { ArticleDetails } from "@myTypes/article.types";
import Link from "next/link";
import { memo } from "react";
import { motion } from "framer-motion";
import { linkVariants } from "@constants/animation.constants";
export const ArticlePreview = memo(
  ({ slug, category, title, createdAt }: ArticleDetails) => {
    return (
      <motion.div
        key={slug}
        variants={linkVariants}
        whileTap={`tap`}
        whileHover={`hover`}
      >
        <Link
          className="flex flex-col bg-white text-dark rounded-lg py-2 px-4 max-w-660"
          href={`${category}/${slug}`}
        >
          <h3 className={`text-1.5 `}>{title}</h3>
          <p className={`font-light`}>{createdAt}</p>
        </Link>
      </motion.div>
    );
  }
);
