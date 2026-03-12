import { ChevronDown, ArrowUpDown } from "lucide-react";

interface CatalogControlsProps {
  totalItems: number;
  currentSort: string;
  onSortChange: (value: string) => void;
}

export const CatalogControls = ({
  totalItems,
  currentSort,
  onSortChange,
}: CatalogControlsProps) => {
  const sortOptions = [
    { value: "popular", label: "По популярності" },
    { value: "price-desc", label: "Ціна: від більшої" },
    { value: "price-asc", label: "Ціна: від меншої" },
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <p className="tracking-tight-tight text-text-primary opacity-50 font-medium font-klein">
        {totalItems} товарів
      </p>

      <div className="relative flex items-center gap-2.5 cursor-pointer group min-w-50">
        <ArrowUpDown size={16} className="custom-sort-icon" />
        <span className="tracking-tight-tight text-text-primary font-semibold font-klein whitespace-nowrap text-right">
          {sortOptions.find((opt) => opt.value === currentSort)?.label}
        </span>

        <ChevronDown size={16} className="text-[#323C48] shrink-0" />
        <select
          value={currentSort}
          onChange={handleSortChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        >
          {sortOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
