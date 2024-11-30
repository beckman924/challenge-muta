import { API_URL } from "@/lib/constants";
import { formatText } from "@/utils/formatText";

import {
  APIResponse,
  FullPokemon,
  Pokemon,
  PokemonSpecies,
} from "@/types/types";

/**
 * Fetches all Pokémon data from the API and formats it.
 * @param name The name of the Pokémon to retrieve data for.
 * @param page The page number of the list of Pokémon to retrieve data for.
 * @returns An object with the following properties: count, next, previous, results.
 * @throws {Error} If no data found for the specified Pokémon or if no species data found.
 */
export const getAllData = async (name?: string, page?: number) => {
  try {
    if (name) {
      const res = await fetch(`${API_URL}/${name}`);
      if (!res.ok) {
        return [];
      }

      const pokemonData = await res.json();

      if (!pokemonData) {
        return [];
      }

      const pokemon: Pokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites?.other?.["official-artwork"]?.front_default,
        types: pokemonData.types,
      };

      return [pokemon];
    } else if (page) {
      const res = await fetch(`${API_URL}?offset=${(page - 1) * 20}&limit=20`);

      if (!res.ok) {
        return [];
      }

      const data: APIResponse = await res.json();

      if (!data) {
        return [];
      }

      const pokemonList: Pokemon[] = await Promise.all(
        data.results.map(async (pokemon) => {
          if (!pokemon.url) {
            throw new Error(`No URL found for ${pokemon.name}`);
          }

          const pokemonData = await fetch(pokemon.url).then((res) =>
            res.json()
          );
          if (!pokemonData) {
            throw new Error(`No data found for ${pokemon.name}`);
          }

          return {
            id: pokemonData.id,
            name: pokemon.name,
            image:
              pokemonData.sprites?.other?.["official-artwork"]?.front_default,
            types: pokemonData.types,
          };
        })
      );

      return {
        results: pokemonList,
        count: data.count,
        next: data.next,
        previous: data.previous,
      };
    }

    const res = await fetch(`${API_URL}?limit=20`);

    if (!res.ok) {
      return [];
    }

    const data: APIResponse = await res.json();

    if (!data) {
      return [];
    }

    const pokemonList: Pokemon[] = await Promise.all(
      data.results.map(async (pokemon) => {
        if (!pokemon.url) {
          throw new Error(`No URL found for ${pokemon.name}`);
        }

        const pokemonData = await fetch(pokemon.url).then((res) => res.json());
        if (!pokemonData) {
          throw new Error(`No data found for ${pokemon.name}`);
        }

        return {
          id: pokemonData.id,
          name: pokemon.name,
          image:
            pokemonData.sprites?.other?.["official-artwork"]?.front_default,
          types: pokemonData.types,
        };
      })
    );

    return {
      results: pokemonList,
      count: data.count,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error(error);
    return [];
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
    const res = await fetch(`${API_URL}/${name}`);
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
