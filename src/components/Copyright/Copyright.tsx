import { LINK_TREE_LINK } from "@constants/links.constants";
import { getCurrentYear } from "@utils/data.utils";
import Link from "next/link";
import { memo } from "react";

export const Copyright = memo(() => {
  return (
    <>
      © {getCurrentYear()}{" "}
      <Link className="text-white" href={LINK_TREE_LINK}>
        Meloroids LLC
      </Link>
    </>
  );
});
