import Link from "next/link";
import { memo } from "react";
import { Nav } from "./Nav";
import { CONTAINER_MAX_WIDTH } from "@constants/style.constants";
import { LogoWithText } from "@components/Logo";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = memo(() => {
  return (
    <header className={`w-full h-20 flex justify-center `}>
      <div
        className={`h-full flex items-center justify-between max-w-${CONTAINER_MAX_WIDTH}  w-full `}
      >
        <LogoWithText />
        <HamburgerMenu />
        <Nav />
      </div>
    </header>
  );
});
