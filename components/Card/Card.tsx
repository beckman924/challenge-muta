import Image from "next/image";
import Link from "next/link";

import { Pokemon } from "@/types/types";
import { pad } from "@/utils/pad";

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <li
        key={pokemon.id}
        className={`bg-${pokemon.types[0].type.name} flex p-[20px] border border-[#ccc] rounded-[20px] relative min-h-[100px]`}
      >
        <div className="flex flex-col justify-center pl-2 md:pl-0">
          <span className="text-xs font-medium">N°{pad(pokemon.id)}</span>
          <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>

          <div
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
          </div>
        </div>

        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={100}
          height={100}
          className="absolute -right-[20px] top-2"
        />
      </li>
    </Link>
  );
}
