import Link, { LinkProps } from "next/link";

const defaultStyle = `font-semibold underline`;

export const MyLink = ({
  children,
  target = "_blank",
  ...props
}: LinkProps & { children: React.ReactNode; target?: string }) => {
  return (
    <Link className={defaultStyle} target={target} {...props}>
      {children}
    </Link>
  );
};
