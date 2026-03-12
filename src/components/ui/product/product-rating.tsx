import { Star } from "lucide-react";
import type { FC } from "react";

interface ProductRatingProps {
  rating: number;
  reviewsCount: number;
}

export const ProductRating: FC<ProductRatingProps> = ({
  rating,
  reviewsCount,
}) => {
  return (
    <div className="flex items-center gap-2 h-[14px]">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          const starNumber = index + 1;
          const isFilled = starNumber <= Math.round(rating);

          return (
            <Star
              key={index}
              size={14}
              strokeWidth={2}
              className={`${
                isFilled ? "fill-accent-blue text-accent-blue" : "text-gray-300"
              }`}
            />
          );
        })}
      </div>

      <span className="font-klein text-[14px] tracking-tight-tight leading-none text-text-primary underline decoration-[#CFD8DC] underline-offset-4]">
        {reviewsCount}
      </span>
    </div>
  );
};
