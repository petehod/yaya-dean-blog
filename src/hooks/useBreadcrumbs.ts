import { splitPathToBreadcrumbs } from "@utils/navigation.utils";
import { usePathname } from "next/navigation";

export const useBreadCrumbs = () => {
  const pathname = usePathname();
  return splitPathToBreadcrumbs(pathname ?? "");
};
