import { LINK_TREE_LINK } from "@constants/links.constants";
import { getCurrentYear } from "@utils/data.utils";
import Link from "next/link";
import { memo } from "react";
import { FooterCopyright } from "./FooterCopyright";
import { NewsletterForm } from "@components/Form";
import { SocialMediaIcons } from "@components/Icon";

export const Footer = memo(() => {
  return (
    <footer className=" p-4 text-center gap-6 flex flex-col">
      <NewsletterForm />
      <SocialMediaIcons />
      <FooterCopyright />
    </footer>
  );
});
