"use client";
import { linkVariants } from "@constants/animation.constants";
import { Breadcrumbs } from "types/breadcrumb.types";
import { motion } from "framer-motion";
import Link from "next/link";
export const Breadcrumb = ({ breadcrumbs }: { breadcrumbs: Breadcrumbs }) => {
  return (
    <ul className="flex">
      {breadcrumbs.map((bc, index) => (
        <div key={bc.url} className={` flex gap-2`}>
          <motion.li
            variants={linkVariants}
            whileTap={`tap`}
            whileHover={`shake`}
          >
            <Link href={bc.url}>{bc.name}</Link>
          </motion.li>
          {index === breadcrumbs.length - 1 ? null : (
            <span className="mr-2">/</span>
          )}
        </div>
      ))}
    </ul>
  );
};
