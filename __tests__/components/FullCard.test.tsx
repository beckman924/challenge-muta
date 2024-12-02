import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { useRouter } from "next/navigation";

import FullCard from "@/components/FullCard";

import { FullPokemon } from "@/types/types";

const mockPokemon: FullPokemon = {
  id: 25,
  name: "pikachu",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  animatedImage:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
  types: [
    {
      slot: 1,
      type: {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
      },
    },
  ],
  description:
    "When several of these POKÉMON gather, their electricity could build and cause lightning storms.",
  species: "pikachu",
  weight: 60,
  height: 4,
  speed: 35,
  hp: 55,
  attack: 40,
  defense: 50,
};

jest.mock("next/navigation");

function setup() {
  render(<FullCard pokemon={mockPokemon} />);
  const heading = screen.getByRole("heading", { level: 2 });
  return { heading };
}

describe("FullCard component", () => {
  test("TestComponent renders", () => {
    const { heading } = setup();
    expect(useRouter).toHaveBeenCalled();
    expect(heading).toHaveTextContent(mockPokemon.name);
  });

  it("renders with a valid pokemon prop", () => {
    render(<FullCard pokemon={mockPokemon} />);
    expect(screen.getAllByText(mockPokemon.name)[0]).toBeInTheDocument();
    expect(screen.getByText(mockPokemon.description)).toBeInTheDocument();
  });

  it("renders with a pokemon prop that has a description", () => {
    render(<FullCard pokemon={mockPokemon} />);
    expect(screen.getByText(mockPokemon.description)).toBeInTheDocument();
  });

  it("renders an Image with the correct src and alt text", () => {
    render(<FullCard pokemon={mockPokemon} />);
    const image = screen.getByAltText(mockPokemon.name);
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fother%2Fofficial-artwork%2F25.png&w=640&q=75"
    );
  });

  it("renders with a pokemon prop that has no description", () => {
    const mockPokemonWithoutDescription: FullPokemon = {
      ...mockPokemon,
      description: "",
    };
    render(<FullCard pokemon={mockPokemonWithoutDescription} />);
    expect(screen.queryByText(mockPokemon.description)).not.toBeInTheDocument();
  });

  it("renders with an invalid pokemon prop", () => {
    const invalidPokemon = {};
    expect(() =>
      render(<FullCard pokemon={invalidPokemon as FullPokemon} />)
    ).toThrow();
  });
});
