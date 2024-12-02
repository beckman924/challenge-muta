import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PokemonList from "@/components/PokemonList";

import { Pokemon } from "@/types/types";

const mockPokemonList: Pokemon[] = [
  {
    id: 1,
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
  },
];

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

describe("PokemonList", () => {
  it("renders with empty pokemonList", () => {
    render(<PokemonList pokemonList={[]} />);
    expect(screen.queryByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("renders with single pokemon in pokemonList", () => {
    render(<PokemonList pokemonList={[mockPokemonList[0]]} />);
    expect(screen.queryByRole("list")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
  });

  it("renders with multiple pokemon in pokemonList", () => {
    render(<PokemonList pokemonList={mockPokemonList} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });

  it("renders with pokemonList containing pokemon with different types", () => {
    render(<PokemonList pokemonList={mockPokemonList} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText("electric")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument();
  });
});
