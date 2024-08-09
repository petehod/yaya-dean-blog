"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { useArticleInformation } from "@hooks/useArticleInformation";
import { useBreadCrumbs } from "@hooks/useBreadcrumbs";
import { getPostBySlug } from "@lib/posts";
import Image from "next/image";
import { memo, useEffect } from "react";
import { BannerImage } from "./BannerImage";

export const ArticleHeader = memo(
  ({ title, date, image }: { title: string; date: string; image?: string }) => {
    const breadcrumbs = useBreadCrumbs();

    return (
      <div className="flex flex-col w-full max-w-60  pt-2 mb-12">
        <Breadcrumb breadcrumbs={breadcrumbs} />

        <div className={`pt-8`}>
          {image && <BannerImage src={image} title={title} height={40} />}
          <h1 className="text-3 font-semibold mb-2">{title}</h1>
          <p className="text-1 font-extralight">Written on {date}</p>
        </div>
      </div>
    );
  }
);
