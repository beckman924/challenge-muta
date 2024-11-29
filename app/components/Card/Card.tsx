import Image from "next/image";
import Link from "next/link";

import { Pokemon } from "@/types/types";

function pad(num: string | number = 0, size = 3) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

export default function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <li
      key={pokemon.id}
      className={`bg-${pokemon.types[0].type.name} flex p-[20px] border border-[#ccc] rounded-[20px] relative min-h-[100px]`}
    >
      <Link scroll={false} href={`/pokemon/${pokemon.id}`}>
        <div className="flex flex-col justify-center pl-2 md:pl-0">
          <span className="text-xs font-medium">N{pad(pokemon.id)}</span>
          <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>

          <div
            className={`w-fit flex items-center gap-2 px-2 py-1 mt-2 text-xs rounded-full font-medium bg-${pokemon.types[0].type.name}`}
          >
            <span className="inline-flex align-center content-center rounded-full w-3 h-3">
              <Image
                src={`./${pokemon.types[0].type.name}-icon.svg`}
                width={12}
                height={12}
                alt={pokemon.types[0].type.name}
              />
            </span>
            <p className="capitalize">{pokemon.types[0].type.name}</p>
          </div>
        </div>

        <Image
          src={pokemon.cardImage}
          alt={pokemon.name}
          width={100}
          height={100}
          className="absolute -right-[20px] top-2"
        />
      </Link>
    </li>
  );
}
