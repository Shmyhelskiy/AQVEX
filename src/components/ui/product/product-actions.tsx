import { useRef, useState, type FC } from "react";
import { ShoppingCart, ChevronDown } from "lucide-react";

interface Volume {
  id: string;
  label: string;
}

interface ProductActionsProps {
  volumes: Volume[];
  onAddToCart: (volumeId: string) => void;
}

export const ProductActions: FC<ProductActionsProps> = ({
  volumes,
  onAddToCart,
}) => {
  const [selectedVolume, setSelectedVolume] = useState(volumes[0]?.id || "");
  const [isAdded, setIsAdded] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart(selectedVolume);

    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVolume(e.target.value);
    selectRef.current?.blur();
  };

  return (
    <div className="flex items-center gap-2 w-full h-[48px]">
      {volumes && (
        <div className="relative h-full w-[123px] shrink-0">
          <select
            ref={selectRef}
            value={selectedVolume}
            onChange={handleVolumeChange}
            className="w-full h-full peer border-[1.5px] border-border rounded-[15px] pl-4 pr-[42px] appearance-none font-klein text-lg text-text-primary focus:outline-none focus:border-accent-blue cursor-pointer"
          >
            {volumes.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>

          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-primary opacity-50 transition-transform duration-300 peer-focus:rotate-180">
            <ChevronDown size={18} />
          </div>
        </div>
      )}

      <button
        onClick={handleAdd}
        disabled={isAdded}
        className={`h-full flex-1 flex items-center justify-center gap-3 rounded-[15px] font-klein font-semibold tracking-tight-tight text-lg transition-all duration-300 ${
          isAdded
            ? "bg-accent-light-blue text-system-green"
            : "bg-accent-light-blue text-text-primary cursor-pointer hover:bg-[#BBDEFB]"
        }`}
      >
        {!isAdded && <ShoppingCart size={26} />}
        <span>{isAdded ? "Додано!" : "В корзину"}</span>
      </button>
    </div>
  );
};
