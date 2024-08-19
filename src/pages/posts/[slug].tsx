import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { GetStaticPaths, GetStaticProps } from "next";
import { MdxLayout } from "@components/Layout";
import { BlogPost } from "types/blog.types";
import { getPostBySlug, getAllPosts } from "@lib/posts";
import { ArticleHeader } from "@components/Article";
import { useMDXComponents } from "@components/mdx-components";
import Head from "next/head";

interface PostProps {
  source: any;
  frontMatter: BlogPost;
}

const Post: React.FC<PostProps> = ({ source, frontMatter }) => {
  const components = useMDXComponents({});

  return (
    <MDXProvider components={components}>
      <>
        <Head>
          <title key={"postTitle"}>{frontMatter.title}</title>
          <meta name="description" content={frontMatter.description} />
        </Head>
        <MdxLayout>
          <ArticleHeader
            title={frontMatter.title}
            date={frontMatter.date}
            image={frontMatter.coverImage}
          />

          <MDXRemote {...source} />
        </MdxLayout>
      </>
    </MDXProvider>
  );
};

export default Post;

// Implement GetStaticPaths and GetStaticProps for fetching blog data...
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
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
