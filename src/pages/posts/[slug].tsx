// pages/posts/[slug].tsx
import { MDXRemote } from "next-mdx-remote";
import { GetStaticPaths, GetStaticProps } from "next";
import { MdxLayout } from "@components/Layout";
import { BlogPost } from "myTypes/blog.types";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { ArticleHeader } from "@components/Article";

interface PostProps {
  source: any;
  frontMatter: BlogPost;
}

const Post: React.FC<PostProps> = ({ source, frontMatter }) => {
  return (
    <MdxLayout>
      <ArticleHeader
        title={frontMatter.title}
        date={frontMatter.date}
        image={frontMatter.coverImage}
      />
      <article>
        <h1 className="text-4xl font-bold">{frontMatter.title}</h1>
        <div className="mt-4">
          <MDXRemote {...source} />
        </div>
      </article>
    </MdxLayout>
  );
};

export default Post;

// Implement GetStaticPaths and GetStaticProps for fetching blog data...
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: {
      source: post.mdxSource,
      frontMatter: post.frontMatter,
    },
  };
};
