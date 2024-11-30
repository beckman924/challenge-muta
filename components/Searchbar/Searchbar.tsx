"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export default function Searchbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="p-4">
      <div className="flex items-center">
        <label htmlFor="search" className="sr-only">
          Search Pókemon
        </label>

        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <span className="iconify uil--search text-gray-500 w-6 h-6" />
          </div>

          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-4"
            placeholder=" Search Pókemon..."
            required
            defaultValue={searchParams.get("name")?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
      </div>
    </div>
  );
}
