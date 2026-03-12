import { useState, useEffect } from "react";
import { getProducts } from "../api/get-products";
import type { Product } from "../types/product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Не вдалося завантажити товари");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  return { products, isLoading, error };
};
