import type { Product } from "../../../types/product";
import { ProductActions } from "./product-actions";
import { ProductImage } from "./product-image";
import { ProductPrice } from "./product-price";
import { ProductRating } from "./product-rating";
import { ProductStatus } from "./product-status";

export const ProductCard = ({ product }: { product: Product }) => {
  const imagePath = `/${product.image}`;

  return (
    <div className="flex flex-col gap-[18px] w-full max-w-[347px]">
      <ProductImage src={imagePath} alt={product.name} />

      <article className="flex flex-col gap-8">
        <ProductPrice
          price={product.price}
          oldPrice={product.old_price}
          discount={product.discount_percent}
        />

        <div className="flex flex-col gap-4">
          <p className="font-klein font-semibold text-text-primary tracking-tight-tight leading-[140%] text-lg line-clamp-2">
            {product.name}
          </p>

          <ProductRating
            rating={product.rating}
            reviewsCount={product.reviews_count}
          />
        </div>

        <ProductStatus
          isAvailable={product.in_stock}
          categoryName={product.category}
        />

        <ProductActions
          volumes={product.volumes}
          onAddToCart={(id) => console.log("Added volume:", id)}
        />
      </article>
    </div>
  );
};
