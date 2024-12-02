import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "@/components/Card";

import { Pokemon } from "@/types/types";

describe("Card component", () => {
  const pokemon: Pokemon = {
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
  };

  it("renders a link with the correct href", () => {
    render(<Card pokemon={pokemon} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/pokemon/Pikachu"
    );
  });

  it("renders a motion.li with the correct initial styles", () => {
    render(<Card pokemon={pokemon} />);
    const motionLi = screen.getByRole("listitem");
    expect(motionLi).toHaveStyle({ opacity: 0, transform: "scale(0.8)" });
  });

  it("renders a span with the correct text content", () => {
    render(<Card pokemon={pokemon} />);
    const span = screen.getByText("N°001");
    expect(span).toBeInTheDocument();
  });

  it("renders an h2 with the correct text content", () => {
    render(<Card pokemon={pokemon} />);
    const h2 = screen.getByText(pokemon.name);
    expect(h2).toBeInTheDocument();
  });

  it("renders a div with the correct text content", () => {
    render(<Card pokemon={pokemon} />);
    const div = screen.getByText(pokemon.types[0].type.name);
    expect(div).toBeInTheDocument();
  });

  it("renders an Image with the correct src and alt text", () => {
    render(<Card pokemon={pokemon} />);
    const image = screen.getByAltText(pokemon.types[0].type.name);
    expect(image).toHaveAttribute(
      "src",
      `/${pokemon.types[0].type.name}-icon.svg`
    );
  });

  it("renders a second Image with the correct src and alt text", () => {
    render(<Card pokemon={pokemon} />);
    const image = screen.getByAltText(pokemon.name);
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fother%2Fofficial-artwork%2F25.png&w=256&q=75"
    );
  });
});
