export const Container = ({
  children,
  padding = "pt-8",
  margin = "mb-4",
}: {
  children: React.ReactNode;
  padding?: string;
  margin?: string;
}) => {
  return <div className={`bg-gray-900 w-full ${padding} ${margin}`}>{children}</div>;
};
