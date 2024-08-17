import { ArticleSignature } from "@components/Article";
import ScrollProgress from "@components/Header/ScrollProgress";
import { memo } from "react";

export const MarkdownWrapper = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start justify-start  w-full max-w-60  text-white min-h-screen mb-6">
      <ScrollProgress />
      {children}
      <ArticleSignature />
    </div>
  );
});
