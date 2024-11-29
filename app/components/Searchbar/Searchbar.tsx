export default function Searchbar() {
  return (
    <div className="p-4">
      <form className="flex items-center">
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
          />
        </div>
      </form>
    </div>
  );
}
