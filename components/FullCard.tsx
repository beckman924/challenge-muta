"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import Stats from "@/components/Stats";
import RadarChart from "@/components/RadarChart";

import { pad } from "@/utils/pad";

import { FullPokemon } from "@/types/types";

export default function FullCard({ pokemon }: { pokemon: FullPokemon }) {
  const router = useRouter();

  return (
    <>
      <motion.div
        className={`bg-${pokemon.types[0].type.name} bg-center bg-contain h-[380px] relative`}
      >
        <span
          onClick={() => router.back()}
          className="iconify uil--arrow-left w-12 h-12 mt-2 ml-2 cursor-pointer"
        />

        <div className="flex flex-col justify-center px-4">
          <span className="flex items-center justify-between">
            <motion.h2
              layoutId={pokemon.name}
              className="font-bold text-[32px] capitalize"
            >
              {pokemon.name}
            </motion.h2>
            <motion.span
              layoutId={`pad-${pokemon.id}`}
              className="text-[20px] font-medium"
            >
              N°{pad(pokemon.id)}
            </motion.span>
          </span>

          <motion.div
            layoutId={`${pokemon.types[0].type.name}-${pokemon.id}`}
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="absolute -bottom-14 left-[70px] md:left-[250px] lg:left-[380px] xl:left-[580px] 2xl:left-[1140px] z-10 select-none"
        >
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={280}
            height={280}
            priority
            className="z-10 select-none"
          />
        </motion.div>
      </motion.div>

      <div className="w-full flex items-center justify-center">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full max-w-5xl bg-white rounded-tl-[50px] rounded-tr-[50px] -mt-[45px] relative"
        >
          <div className="pt-[90px] flex flex-col justify-around divide-y px-4 md:px-32">
            {pokemon.description && (
              <p className="text-center md:text-lg p-2 mb-2">
                {pokemon.description}
              </p>
            )}

            <Stats pokemon={pokemon} />

            <RadarChart pokemon={pokemon} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
