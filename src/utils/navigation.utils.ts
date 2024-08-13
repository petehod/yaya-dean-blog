import { HOME_LINK } from "@constants/links.constants";
import { Breadcrumbs } from "types/breadcrumb.types";

export const splitPathToBreadcrumbs = (path: string): Breadcrumbs => {
  if (!path || path === "/") {
    return [{ name: "Home", url: "/" }];
  }

  const segments = path.split("/").filter((segment) => segment);
  const breadcrumbs = segments.map((segment, index) => {
    const slug = segments[segments.length - 1];
    const url =
      index === 0 ? HOME_LINK : "/" + segments.slice(0, index + 1).join("/");
    const name = segment.replace(/-/g, " ");

    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url,
      slug,
    };
  });

  return breadcrumbs;
};
