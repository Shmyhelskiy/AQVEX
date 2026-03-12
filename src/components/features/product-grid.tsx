interface ProductGridProps {
  children: React.ReactNode;
}

export const ProductGrid = ({ children }: ProductGridProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-15">
      {children}
    </section>
  );
};