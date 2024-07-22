import { articles } from "@data/articles.data";

export const getArticleTitle = (slug: string) => {
  return articles.find((article) => article.slug === slug)?.title;
};

export const getArticleCreatedAt = (slug: string) => {
  return articles.find((article) => article.slug === slug)?.createdAt;
};

export const getArticleInformation = (slug: string) => {
  return {
    title: getArticleTitle(slug),
    createdAt: getArticleCreatedAt(slug),
  };
};
