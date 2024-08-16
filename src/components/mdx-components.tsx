// app/components/mdx-components.tsx (or components/mdx-components.tsx)
import type { MDXComponents } from "mdx/types";
import { ButtonOutline } from "./Button";
import { PostImage } from "./Image";
import { CodeBlock } from "./CodeBlock";
import { Spacer } from "./Spacer";
import { ColumnContainer } from "./Column";
import { ItalicText } from "./Text";
import { List } from "./Lists";
import { ArticleSignature } from "./Article";
import { typographyStyles } from "@styles/typography.styles";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={typographyStyles.h1}>{children}</h1>,
    h2: ({ children }) => <h2 style={typographyStyles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 style={typographyStyles.h3}>{children}</h3>,
    h4: ({ children }) => <h4 style={typographyStyles.h4}>{children}</h4>,
    h5: ({ children }) => <h5 style={typographyStyles.h5}>{children}</h5>,
    h6: ({ children }) => <h6 style={typographyStyles.h6}>{children}</h6>,
    p: ({ children }) => <p style={typographyStyles.p}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote style={typographyStyles.blockquote}>{children}</blockquote>
    ),
    ul: ({ children }) => <ul style={typographyStyles.ul}>{children}</ul>,
    ol: ({ children }) => <ol style={typographyStyles.ol}>{children}</ol>,
    li: ({ children }) => <li style={typographyStyles.li}>{children}</li>,
    strong: ({ children }) => <strong style={typographyStyles.strong}>{children}</strong>,
    em: ({ children }) => <em style={typographyStyles.em}>{children}</em>,

    code: ({ children }) => <code style={typographyStyles.code}>{children}</code>,
    ButtonOutline,
    PostImage,
    ColumnContainer,
    ItalicText,
    Spacer,
    ArticleSignature,
    List,
    CodeBlock,
    ...components,
  };
}
