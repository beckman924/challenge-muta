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
  cardImage: string;
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
