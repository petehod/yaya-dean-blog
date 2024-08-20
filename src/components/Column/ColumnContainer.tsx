export const ColumnContainer = ({
  items,
  header,
}: {
  items: React.ReactNode[];
  header?: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col bg-gray-900 px-4 py-6 gap-y-4 w-full mb-8`}>
      {header}
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-center text-center  w-full  rounded-lg ">
        {items.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col justify-start items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
