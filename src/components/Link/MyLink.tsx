import Link, { LinkProps } from "next/link";

const defaultStyle = `font-semibold underline`;

export const MyLink = ({ children, ...props }: LinkProps & { children: React.ReactNode }) => {
  return (
    <Link className={defaultStyle} target="_blank" {...props}>
      {children}
    </Link>
  );
};
