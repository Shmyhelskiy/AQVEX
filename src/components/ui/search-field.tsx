import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Поиск",
}: SearchInputProps) => {
  return (
    <div className="relative w-full max-w-[454px] max-h-11 text-text-primary">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 ">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-[51px] pr-4 py-3 bg-[#F6F7F9] font-afacad text-[18px] leading-[140%] tracking-tight-tight outline-none rounded-xl placeholder:text-text-primary"
      />
    </div>
  );
};
