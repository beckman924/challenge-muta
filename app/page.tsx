import Header from "@/components/Header/Header";
import Searchbar from "@/components/Searchbar/Searchbar";
import PokemonList from "@/components/PokemonList/PokemonList";
import Pagination from "@/components/Pagination/Pagination";

import { getAllData } from "@/utils/getData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; page?: number }>;
}) {
  const { name, page } = await searchParams;
  const data = await getAllData(name, page);

  if ("results" in data) {
    return (
      <>
        <Header />

        <main className="pt-36 max-w-sm mx-auto px-4 md:max-w-4xl md:px-0">
          <Searchbar />

          {data.results.length === 0 ? (
            <h2 className="mt-10 text-center">
              No pokemon found with the name &quot;{name}&quot;
            </h2>
          ) : (
            <PokemonList pokemonList={data.results} />
          )}

          <Pagination count={data.count} />
        </main>
      </>
    );
  } else {
    return (
      <>
        <Header />

        <main className="pt-36 max-w-sm mx-auto px-4 md:max-w-4xl md:px-0">
          <Searchbar />

          {data.length === 0 ? (
            <h2 className="mt-10 text-center">
              No pokemon found with the name &quot;{name}&quot;
            </h2>
          ) : (
            <PokemonList pokemonList={data} />
          )}
        </main>
      </>
    );
  }
}
