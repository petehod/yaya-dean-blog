import Image from "next/image";

export const BannerImage = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className={`relative w-full h-60 rounded mb-4`}>
      <Image src={`/assets/images/${src}`} className="rounded object-cover" alt={title} fill />
    </div>
  );
};
