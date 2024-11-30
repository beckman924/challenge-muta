"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({ count }: { count: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const totalPages = Math.ceil(count / 20);

  const currentPage = parseInt(searchParams.get("page") || "1");

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pages = [];
    if (currentPage > 3) pages.push(1, "...");
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...", totalPages);
    return pages;
  };

  return (
    <div className="flex items-center gap-2 justify-center my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={`page-${page}`}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            } rounded`}
          >
            {page}
          </button>
        ) : (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
            ...
          </span>
        )
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
