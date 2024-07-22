import { memo } from "react";

interface TitleProps {
  title: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export const Title = memo(({ title, text }: TitleProps) => {
  const Tag = title;

  return <Tag>{text}</Tag>;
});
