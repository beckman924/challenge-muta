import Searchbar from "@/components/Searchbar/Searchbar";
import PokemonList from "@/components/PokemonList/PokemonList";
import Header from "@/components/Header/Header";

import { getAllData } from "@/utils/getData";

export default async function Home() {
  const pokemonList = await getAllData();

  if (!pokemonList) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />

      <main className="pt-36 max-w-sm mx-auto px-4 md:max-w-4xl md:px-0">
        <Searchbar />

        <PokemonList pokemonList={pokemonList} />
      </main>
    </>
  );
}
