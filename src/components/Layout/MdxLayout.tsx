import { memo } from "react";
import { Header } from "../Header";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../styles/globals.css";
import { MarkdownWrapper } from "./MarkdownWrapper";
import { Footer } from "@components/Footer";
import { LAYOUT_STYLE } from "@constants/layout.constants";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const MdxLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${pjs.className} ${LAYOUT_STYLE} gradient-bg px-6 md:px-6`}
    >
      <Header />
      <MarkdownWrapper>{children}</MarkdownWrapper>
      <Footer />
    </div>
  );
});
