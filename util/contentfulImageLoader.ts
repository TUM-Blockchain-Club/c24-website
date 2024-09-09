import { ImageLoaderProps } from "next/image";

export const contentfulImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
