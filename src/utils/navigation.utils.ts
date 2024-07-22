import { Breadcrumbs } from "@myTypes/breadcrumb.types";

export const splitPathToBreadcrumbs = (path: string): Breadcrumbs => {
  if (!path || path === "/") {
    return [{ name: "Home", url: "/" }];
  }

  const segments = path.split("/").filter((segment) => segment);
  const breadcrumbs = segments.map((segment, index) => {
    const slug = segments[segments.length - 1];
    const url = "/" + segments.slice(0, index + 1).join("/");
    const name = segment.replace(/-/g, " "); // Replace hyphens with spaces for readability

    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url,
      slug,
    };
  });

  // Add the Home breadcrumb at the beginning
  return [{ name: "Home", url: "/" }, ...breadcrumbs];
};
