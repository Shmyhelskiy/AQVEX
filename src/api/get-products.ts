import type { Product, ProductsResponse } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      "https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products",
    );

    if (!response.ok) {
      throw new Error(`Помилка сервера: ${response.status}`);
    }

    const json: ProductsResponse = await response.json();

    if (json.success && json.data && Array.isArray(json.data.products)) {
      return json.data.products.map((product) => ({
        ...product,
        image: "product-1.png",
      }));
    }

    console.error("Неочікувана структура JSON:", json);
    return [];
  } catch (error) {
    console.error("Помилка при отриманні товарів:", error);
    return [];
  }
};
