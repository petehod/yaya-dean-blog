// types/index.ts

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
  content: string;
  tags?: string[];
  author?: string;
  coverImage?: string;
}
