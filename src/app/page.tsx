import { ArticlePreview } from "@components/Article";
import { Hero } from "@components/Hero";
import { CONTAINER_MAX_WIDTH } from "@constants/style.constants";
import { articles } from "@data/articles.data";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center max-w-${CONTAINER_MAX_WIDTH} w-full py-12`}
    >
      <Hero />
      <h2 className="text-1.5 font-extralight mb-2">Recent Articles:</h2>
      <div className="flex flex-col justify-center gap-2">
        {articles.map((a) => (
          <ArticlePreview key={a.slug} {...a} />
        ))}
      </div>
    </main>
  );
}
