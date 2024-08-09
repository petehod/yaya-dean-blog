import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: "48px" }}>{children}</h1>,
    h2: ({ children }) => (
      <h2 style={{ fontSize: "32px", fontWeight: "lighter" }}>{children}</h2>
    ),
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
