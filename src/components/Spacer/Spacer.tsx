export const Spacer = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return <div style={{ height: size === "sm" ? 8 : size === "md" ? 16 : 32 }} />;
};
