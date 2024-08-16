"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { useArticleInformation } from "@hooks/useArticleInformation";
import { useBreadCrumbs } from "@hooks/useBreadcrumbs";
import { getPostBySlug } from "@lib/posts";
import Image from "next/image";
import { memo, useEffect } from "react";
import { BannerImage } from "./BannerImage";
import { formatHeaderDate } from "@utils/textFormat.utils";
export const ArticleHeader = memo(
  ({ title, date, image }: { title: string; date: string; image?: string }) => {
    const breadcrumbs = useBreadCrumbs();

    const formattedDate = formatHeaderDate(date);

    return (
      <div className="flex flex-col w-full max-w-60  pt-2 mb-4  ">
        <Breadcrumb breadcrumbs={breadcrumbs} />

        <div className={`mt-4`}>
          <h1 className="text-3 font-semibold mb-4">{title}</h1>
          {image && <BannerImage src={image} title={title} />}
          <p className="text-1 font-extralight">Written on {formattedDate} by dean</p>
        </div>
      </div>
    );
  }
);
