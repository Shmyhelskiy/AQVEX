import type { FC } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
}

export const ProductImage: FC<ProductImageProps> = ({ src, alt }) => {
  return (
    <div className="relative size-[347px] w-full">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/placeholder.png";
        }}
      />
    </div>
  );
};
