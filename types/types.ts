export interface APIResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonResult[];
}
export interface PokemonResult {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: Type;
}

interface Type {
  name: string;
  url: string;
}

export interface FullPokemon extends Pokemon {
  description: string;
  weight: number;
  height: number;
  speed: number;
  hp: number;
  attack: number;
  defense: number;
  animatedImage: string;
  species: string;
}

export interface PokemonSpecies {
  flavor_text: string;
  language: Language;
  version: Language;
}

interface Language {
  name: string;
  url: string;
}
