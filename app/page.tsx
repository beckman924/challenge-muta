import Searchbar from "@/components/Searchbar/Searchbar";
import PokemonList from "@/components/PokemonList/PokemonList";
import Header from "@/components/Header/Header";

import { getAllData } from "@/utils/getData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;
  const pokemonList = await getAllData(name);

  return (
    <>
      <Header />

      <main className="pt-36 max-w-sm mx-auto px-4 md:max-w-4xl md:px-0">
        <Searchbar />

        {pokemonList.length === 0 ? (
          <h2 className="mt-10 text-center">
            No pokemon found with the name &quot;{name}&quot;
          </h2>
        ) : (
          <PokemonList pokemonList={pokemonList} />
        )}
      </main>
    </>
  );
}
