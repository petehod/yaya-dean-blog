import { ArticleHeader } from "@components/Article";
import { memo } from "react";

export const MarkdownWrapper = memo(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex flex-col items-start justify-start bg-dark w-full max-w-60 bg-black text-white min-h-screen">
        <ArticleHeader />
        {children}
      </div>
    );
  }
);
