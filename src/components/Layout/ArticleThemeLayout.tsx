import { Plus_Jakarta_Sans } from "next/font/google";
import "../../styles/globals.css";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { LAYOUT_STYLE } from "@constants/layout.constants";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const ArticleThemeLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={`${pjs.className} ${LAYOUT_STYLE} gradient-bg`}>
      <Header />
      <main className={`min-h-screen`}>{children}</main>
      <Footer />
    </div>
  );
};
