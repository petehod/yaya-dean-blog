import { ArticlePreview } from "@components/Article";
import { Hero } from "@components/Hero";
import { CONTAINER_MAX_WIDTH } from "@constants/style.constants";
import { articles } from "@data/articles.data";
import { getAllPosts } from "@lib/posts";
import { BlogPost } from "@myTypes/blog.types";
import { GetStaticProps } from "next";
import Link from "next/link";
export default function Home() {
  const posts = getAllPosts();

  return (
    <main
      className={`flex min-h-screen flex-col items-center max-w-${CONTAINER_MAX_WIDTH} w-full py-12`}
    >
      <Hero />
      <h2 className="text-1.5 font-extralight mb-2">Recent Articles:</h2>
      <div className="flex flex-col justify-center gap-2">
        {posts.map((post) => (
          <ArticlePreview key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
