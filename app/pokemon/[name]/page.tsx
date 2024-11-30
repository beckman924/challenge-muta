import { getPokemonData } from "@/utils/getData";

import FullCard from "@/components/FullCard";

import { FullPokemon } from "@/types/types";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  if (!name) return null;

  const pokemon: FullPokemon | null = await getPokemonData(name);

  if (!pokemon) return null;

  return <FullCard pokemon={pokemon} />;
}
