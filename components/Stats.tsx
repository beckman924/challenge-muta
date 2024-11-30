import IconSpecies from "@/components/Icons/IconSpecies";
import IconWeight from "@/components/Icons/IconWeight";
import IconHeight from "@/components/Icons/IconHeight";
import IconSpeed from "@/components/Icons/IconSpeed";
import IconHP from "@/components/Icons/IconHP";
import IconAttack from "@/components/Icons/IconAttack";
import IconDefense from "@/components/Icons/IconDefense";

import { FullPokemon } from "@/types/types";

export default function Stats({ pokemon }: { pokemon: FullPokemon }) {
  return (
    <>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconSpecies />
        </div>

        <div className="font-bold w-24">Species</div>
        <div className="flex-1 opacity-50 capitalize">{pokemon.species}</div>
      </div>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconWeight />
        </div>

        <div className="font-bold w-24">Weight</div>
        <div className="flex-1 opacity-50">{pokemon.weight} kg</div>
      </div>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconHeight />
        </div>

        <div className="font-bold w-24">Height</div>
        <div className="flex-1 opacity-50">
          {pokemon.height * 10 >= 100
            ? `${pokemon.height / 10} m`
            : `${pokemon.height * 10} cm`}
        </div>
      </div>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconSpeed />
        </div>

        <div className="font-bold w-24">Speed</div>
        <div className="flex-1 opacity-50">{pokemon.speed}</div>
      </div>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconHP />
        </div>

        <div className="font-bold w-24">HP</div>
        <div className="flex-1 opacity-50">{pokemon.hp}</div>
      </div>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconAttack />
        </div>

        <div className="font-bold w-24">Attack</div>
        <div className="flex-1 opacity-50 ">{pokemon.attack}</div>
      </div>
      <div className="flex items-center p-2 gap-2">
        <div className="w-8">
          <IconDefense />
        </div>

        <div className="font-bold w-24">Defense</div>
        <div className="flex-1 opacity-50">{pokemon.defense}</div>
      </div>
    </>
  );
}
