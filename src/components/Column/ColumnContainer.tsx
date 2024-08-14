export const ColumnContainer = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <div className="flex justify-center text-center bg-dark w-full py-6 rounded-lg">
      {items.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col justify-start items-center">
          {item}
        </div>
      ))}
    </div>
  );
};
