import Card from "@/components/Card/Card";
import { Pokemon } from "@/types/types";

export default function PokemonList({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  return (
    <ul className={`grid grid-cols-pokemon-list px-4 gap-4`}>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
}
