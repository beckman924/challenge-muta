import { formatText } from "./formatText";

import {
  APIResponse,
  FullPokemon,
  Pokemon,
  PokemonSpecies,
} from "@/types/types";

/**
 * Fetches all Pokémon data from the API and formats it.
 * @returns An array of objects with the following properties: id, name, image, types.
 */
export const getAllData = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}?limit=20`);
    const { results }: APIResponse = await res.json();

    const pokemonList: Pokemon[] = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url).then((res) => res.json());

        return {
          id: pokemonData.id,
          name: pokemon.name,
          image: pokemonData.sprites.other["official-artwork"].front_default,
          types: pokemonData.types,
        };
      })
    );

    return pokemonList;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches Pokémon data from the API and formats it.
 * @param name The name of the Pokémon to retrieve data for.
 * @returns An object with the following properties: id, name, image, animatedImage, types, description, species, weight, height, speed, hp, attack, defense.
 * @throws {Error} If no data found for the specified Pokémon or if no species data found.
 */
export const getPokemonData = async (
  name: string
): Promise<FullPokemon | null> => {
  try {
    const res = await fetch(`${process.env.API_URL}/${name}`);
    const pokemonData = await res.json();

    if (!pokemonData) {
      throw new Error(`No data found for ${name}`);
    }

    const pokemonSpecies = await fetch(pokemonData.species.url).then((res) =>
      res.json()
    );

    if (!pokemonSpecies) {
      throw new Error(`No species data found for ${name}`);
    }

    return {
      id: pokemonData.id,
      name: pokemonData.name,
      image:
        pokemonData.sprites?.other?.["official-artwork"]?.front_default || "",
      animatedImage:
        pokemonData.sprites?.other?.["showdown"]?.front_default || "",
      types: pokemonData.types || [],
      description:
        formatText(
          pokemonSpecies.flavor_text_entries?.find(
            (entry: PokemonSpecies) => entry.language.name === "en"
          )?.flavor_text || ""
        ) || "",
      species: pokemonData.species.name || "",
      weight: pokemonData.weight || 0,
      height: pokemonData.height || 0,
      speed: pokemonData.stats?.[0]?.base_stat || 0,
      hp: pokemonData.stats?.[1]?.base_stat || 0,
      attack: pokemonData.stats?.[2]?.base_stat || 0,
      defense: pokemonData.stats?.[3]?.base_stat || 0,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
