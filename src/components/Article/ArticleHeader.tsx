"use client";
import { Breadcrumb } from "@components/Breadcrumb";
import { useArticleInformation } from "@hooks/useArticleInformation";
import { useBreadCrumbs } from "@hooks/useBreadcrumbs";
import { memo } from "react";

export const ArticleHeader = memo(() => {
  const breadcrumbs = useBreadCrumbs();
  const slug = breadcrumbs[breadcrumbs.length - 1]?.slug!;
  const articleInformation = useArticleInformation(slug);
  return (
    <div className="flex flex-col w-full max-w-60  pt-2 mb-12">
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className={`pt-4`}>
        <h1 className="text-3 font-semibold mb-2">
          {articleInformation.title}
        </h1>
        <p className="text-1 font-extralight">
          Written on {articleInformation.createdAt}
        </p>
      </div>
    </div>
  );
});
