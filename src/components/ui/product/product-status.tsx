import { CircleCheck, Droplet } from "lucide-react";
import type { FC } from "react";

interface ProductStatusProps {
  isAvailable: boolean;
  categoryName: string;
}

export const ProductStatus: FC<ProductStatusProps> = ({
  isAvailable,
  categoryName,
}) => {
  return (
    <div className="flex items-center gap-[14px] h-[18px] tracking-tight-tight">
      <div className="flex items-center gap-2">
        <CircleCheck
          size={16}
          className={
            isAvailable ? "fill-system-green! text-white" : "text-gray-400"
          }
          strokeWidth={3}
        />
        <span className="font-klein text-[14px] font-medium text-text-primary leading-none">
          {isAvailable ? "В наявності" : "Немає в наявності"}
        </span>
      </div>

      <Droplet size={16} className="fill-gray text-gray"/>

      <span className="font-klein text-[14px] font-normal text-text-secondary leading-none">
        {categoryName}
      </span>
    </div>
  );
};
