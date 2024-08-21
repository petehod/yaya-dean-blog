// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { BlogPost } from "types/blog.types";
import rehypeSlug from "rehype-slug";

const postsDirectory = path.join(process.cwd(), "src/posts");

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  });

  return {
    frontMatter: data as BlogPost,
    mdxSource,
  };
}

export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const { data } = matter(fs.readFileSync(path.join(postsDirectory, filename), "utf8"));

    return {
      ...(data as BlogPost),
    };
  });
}
