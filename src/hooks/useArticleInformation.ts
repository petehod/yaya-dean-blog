import { getArticleInformation } from "@utils/article.utils";

export const useArticleInformation = (slug: string) => {
  return getArticleInformation(slug);
};
