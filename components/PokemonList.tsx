"use client";

import { motion } from "framer-motion";

import Card from "@/components/Card";
import { Pokemon } from "@/types/types";

export default function PokemonList({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-pokemon-list px-4 gap-4"
    >
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </motion.ul>
  );
}
