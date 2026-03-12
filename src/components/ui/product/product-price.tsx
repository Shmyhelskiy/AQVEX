import type { FC } from "react";

interface ProductPriceProps {
  price: number;
  oldPrice?: number;
  discount?: number;
}

export const ProductPrice: FC<ProductPriceProps> = ({
  price,
  oldPrice,
  discount,
}) => {
  const hasDiscount = oldPrice && oldPrice > price;

  return (
    <div>
      <div className="flex items-center gap-3 font-medium text-[22px] leading-none font-klein">
        {hasDiscount && (
          <div className="relative h-fit">
            <del className=" text-[#8090A4] no-underline tracking-tight-tight">
              {oldPrice}
            </del>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-system-red -translate-y-1/2" />
            <span className="sr-only">Стара ціна:</span>
          </div>
        )}

        <span className="bg-gradient-main bg-clip-text text-transparent tracking-tight-tight">
          {price} грн
        </span>

        <div className="flex items-center h-[18px]">
          <img
            src="/tag-front.svg"
            alt=""
            className="h-full w-[13px] object-cover"
          />
          <div className="flex items-center bg-system-red text-white pr-[3px] py-1 rounded-r-md  text-sm font-bold max-h-[18px]">
            <span className="">{discount}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
