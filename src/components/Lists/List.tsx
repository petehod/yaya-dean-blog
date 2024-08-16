import React from "react";

const generateListStyles = (type: "ol" | "ul") => {
  if (type === "ol") {
    return "list-decimal list-inside";
  } else {
    return "list-disc list-inside";
  }
};

export const List = ({
  type: As = "ul",
  items,
  title,
  subtitle,
}: {
  type?: "ol" | "ul";
  items: string[];
  title?: string;
  subtitle?: string;
}) => {
  const listStyles = generateListStyles(As);

  return (
    <>
      {title && <h3 className="text-1.25">{title}</h3>}
      {subtitle && <h3 className="text-1">{subtitle}</h3>}

      <As className={`text-white flex-col items- ${listStyles}`}>
        {items.map((li) => (
          <li key={li} className="my-0.5">
            {li}
          </li>
        ))}
      </As>
    </>
  );
};
