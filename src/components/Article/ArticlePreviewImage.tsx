import Image from "next/image";
export const ArticlePreviewImage = ({
  src,
  title,
}: {
  src: string;
  title: string;
}) => {
  return (
    <div className="relative h-24 w-16 mt-2">
      <Image
        src={`/assets/images/${src}`}
        alt={title}
        fill
        className="rounded-lg"
      />
    </div>
  );
};
