// app/components/mdx-components.tsx (or components/mdx-components.tsx)
import type { MDXComponents } from "mdx/types";
import { ButtonOutline } from "./Button";
import { PostImage } from "./Image";
import { CodeBlock } from "./CodeBlock";
import { Spacer } from "./Spacer";
import { ColumnContainer } from "./Column";
import { YoutubeIFrame } from "./IFrame";
import { Container } from "./Container";
import { BoldText, ItalicText } from "./Text";
import { List } from "./Lists";
import { ArticleSignature } from "./Article";
import { typographyStyles } from "@styles/typography.styles";
import { MyLink } from "./Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 style={typographyStyles.h1} {...props}>
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2 {...props} style={typographyStyles.h2} {...props}>
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 style={typographyStyles.h3} {...props}>
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4 style={typographyStyles.h4} {...props}>
        {props.children}
      </h4>
    ),
    h5: (props) => (
      <h5 style={typographyStyles.h5} {...props}>
        {props.children}
      </h5>
    ),
    h6: (props) => (
      <h6 style={typographyStyles.h6} {...props}>
        {props.children}
      </h6>
    ),
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
    Container,
    ColumnContainer,
    BoldText,
    ItalicText,
    Spacer,
    ArticleSignature,
    List,
    MyLink,
    CodeBlock,
    YoutubeIFrame,
    ...components,
  };
}
