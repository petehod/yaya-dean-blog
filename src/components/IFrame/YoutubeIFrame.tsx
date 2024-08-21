type YoutubeIFrameProps = {
  src: string;
  width?: string;
  height?: string;
};

export const YoutubeIFrame = ({ src, width = "100%", height = "560" }: YoutubeIFrameProps) => {
  return (
    <iframe
      src={src}
      height={height}
      width={width}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
