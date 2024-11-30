import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Pokemon } from "@/types/types";
import { pad } from "@/utils/pad";

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <motion.li
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={`bg-${pokemon.types[0].type.name} flex p-[20px] border border-[#ccc] rounded-[20px] relative min-h-[100px]`}
      >
        <div className="flex flex-col justify-center pl-2 md:pl-0">
          <motion.span
            layoutId={`pad-${pokemon.id}`}
            className="text-xs font-medium"
          >
            N°{pad(pokemon.id)}
          </motion.span>
          <motion.h2
            layoutId={pokemon.name}
            className="text-xl font-bold capitalize"
          >
            {pokemon.name}
          </motion.h2>

          <motion.div
            layoutId={`${pokemon.types[0].type.name}-${pokemon.id}`}
            className={`w-fit flex items-center gap-2 px-2 py-1 mt-2 text-xs rounded-full font-medium bg-${pokemon.types[0].type.name}`}
          >
            <span className="flex items-center justify-center rounded-full w-3 h-3">
              <Image
                src={`/${pokemon.types[0].type.name}-icon.svg`}
                width={12}
                height={12}
                alt={pokemon.types[0].type.name}
              />
            </span>
            <p className="capitalize">{pokemon.types[0].type.name}</p>
          </motion.div>
        </div>

        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={100}
          height={100}
          className="absolute -right-[20px] top-2"
        />
      </motion.li>
    </Link>
  );
}
