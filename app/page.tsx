import Searchbar from "@/components/Searchbar/Searchbar";
import { APIResponse, Pokemon } from "@/types/types";
import PokemonList from "./components/PokemonList/PokemonList";

export default async function Home() {
  const getPokemonList = async () => {
    try {
      const res = await fetch(`${process.env.API_URL}?limit=20`);
      const { results }: APIResponse = await res.json();

      const pokemonList: Pokemon[] = await Promise.all(
        results.map(async (pokemon) => {
          const pokemonData = await fetch(pokemon.url).then((res) =>
            res.json()
          );

          return {
            id: pokemonData.id,
            name: pokemon.name,
            cardImage:
              pokemonData.sprites.other["official-artwork"].front_default,
            image: pokemonData.sprites.other["showdown"].front_default,
            types: pokemonData.types,
          };
        })
      );

      return pokemonList;
    } catch (error) {
      console.log(error);
    }
  };

  const pokemonList = await getPokemonList();

  console.log(pokemonList);

  if (!pokemonList) {
    return <p>Loading...</p>;
  }

  return (
    <main className="max-w-sm mx-auto px-4 md:max-w-4xl md:px-0">
      <Searchbar />

      <PokemonList pokemonList={pokemonList} />
    </main>
  );
}
