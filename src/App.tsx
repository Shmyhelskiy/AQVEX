// import { useEffect, useMemo, useState } from "react";
import { SearchInput } from "./components/ui/search-field";
import { CatalogControls } from "./components/features/catalog-controls";
import { ProductGrid } from "./components/features/product-grid";
import { ProductCard } from "./components/ui/product/product-card";
import { Pagination } from "./components/ui/pagination";
import { useProducts } from "./hooks/use-products";
import { useCatalog } from "./hooks/use-catalog";

function App() {
  const { products, isLoading, error } = useProducts();

  const {
    searchQuery,
    handleSearch,
    sortType,
    handleSort,
    currentPage,
    handlePageChange,
    currentItems,
    totalPages,
    totalCount,
  } = useCatalog(products, 12);

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <main>
      <div className="flex flex-col gap-5 mb-5">
        <section className="flex flex-wrap items-center justify-end gap-4">
          <SearchInput value={searchQuery} onChange={handleSearch} />
        </section>
        <section className="w-full">
          <CatalogControls
            totalItems={totalCount}
            onSortChange={handleSort}
            currentSort={sortType}
          />
        </section>
      </div>

      <ProductGrid>
        {isLoading ? (
          [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 h-64 rounded-xl"
            />
          ))
        ) : currentItems.length > 0 ? (
          currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center py-10">Товарів не знайдено</p>
        )}
      </ProductGrid>
      {!isLoading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

export default App;
