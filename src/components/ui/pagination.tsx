import { MoveLeft, MoveRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-10 ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <MoveLeft size={24} />
      </button>

      <div className="flex items-center gap-1">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`size-[46px] rounded-[15px] font-klein font-bold tracking-tight-tight transition-all text-text-primary  ${
                currentPage === page
                  ? "border-[1.5px] border-accent-blue "
                  : "hover:bg-gray-100 active:bg-gray-200 text-text-primary cursor-pointer"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <MoveRight size={24} />
      </button>
    </div>
  );
};
