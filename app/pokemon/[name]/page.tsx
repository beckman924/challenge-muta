import Image from "next/image";
import Link from "next/link";

import Stats from "@/components/Stats/Stats";
import RadarChart from "@/components/RadarChart/RadarChart";

import { getPokemonData } from "@/utils/getData";
import { pad } from "@/utils/pad";

import { FullPokemon } from "@/types/types";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  if (!name) return null;

  const pokemon: FullPokemon | null = await getPokemonData(name);

  if (!pokemon) return null;

  return (
    <>
      <div
        className={`bg-${pokemon.types[0].type.name} bg-center bg-contain h-[380px] relative`}
      >
        <Link scroll={false} href="/">
          <span className="iconify uil--arrow-left w-12 h-12 mt-2 ml-2 cursor-pointer" />
        </Link>

        <div className="flex flex-col justify-center px-4">
          <span className="flex items-center justify-between">
            <h3 className="font-bold text-[32px] capitalize">{pokemon.name}</h3>
            <span className="text-[20px] font-medium">N°{pad(pokemon.id)}</span>
          </span>

          <div
            className={`w-fit flex items-center gap-2 px-3 py-1 mt-2 text-xs rounded-full font-medium bg-${pokemon.types[0].type.name}`}
          >
            <span className="flex items-center justify-center rounded-full w-5 h-5">
              <Image
                src={`/${pokemon.types[0].type.name}-icon.svg`}
                width={20}
                height={20}
                alt={pokemon.types[0].type.name}
                className="text-black"
              />
            </span>
            <p className="text-lg capitalize">{pokemon.types[0].type.name}</p>
          </div>
        </div>

        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={280}
          height={280}
          className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none"
          priority
        />
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-full h-full max-w-5xl bg-white rounded-tl-[50px] rounded-tr-[50px] -mt-[45px] relative">
          <div className="pt-[90px] flex flex-col justify-around divide-y px-4 md:px-32">
            {pokemon.description && (
              <p className="text-center md:text-lg p-2 mb-2">
                {pokemon.description}
              </p>
            )}

            <Stats pokemon={pokemon} />

            <RadarChart pokemon={pokemon} />
          </div>
        </div>
      </div>
    </>
  );
}
