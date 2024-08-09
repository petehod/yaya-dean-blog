import Image from "next/image";

export const BannerImage = ({
  src,
  title,
  height = 40,
}: {
  src: string;
  title: string;
  height?: number;
}) => {
  return (
    <div className={`relative w-full h-${height} rounded mb-6`}>
      <Image
        src={`/assets/images/${src}`}
        objectFit="cover"
        className="rounded"
        alt={title}
        fill
      />
    </div>
  );
};
