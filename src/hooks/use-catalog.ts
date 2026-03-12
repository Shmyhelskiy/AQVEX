import { useState, useMemo } from "react";
import type { Product } from "../types/product";

export const useCatalog = (products: Product[], itemsPerPage: number) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  const processedProducts = useMemo(() => {
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const sorted = [...result];
    if (sortType === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sortType === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sortType === "popular")
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return sorted;
  }, [products, searchQuery, sortType]);

  const totalPages = Math.ceil(processedProducts.length / itemsPerPage);

  const safePage = currentPage > totalPages ? 1 : currentPage;

  const currentItems = useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return processedProducts.slice(start, start + itemsPerPage);
  }, [processedProducts, safePage, itemsPerPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSort = (type: string) => {
    setSortType(type);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    searchQuery,
    handleSearch,
    sortType,
    handleSort,
    currentPage: safePage,
    handlePageChange,
    currentItems,
    totalPages,
    totalCount: processedProducts.length,
  };
};
