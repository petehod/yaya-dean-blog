export type ArticleDetails = {
  slug: string;
  title: string;
  createdAt: string;
  category: "guitar" | "music-theory" | "coding";
};
export type Articles = ArticleDetails[];
