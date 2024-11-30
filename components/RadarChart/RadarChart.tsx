"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { FullPokemon } from "@/types/types";

export default function RadarChartContainer({
  pokemon,
}: {
  pokemon: FullPokemon;
}) {
  const data = [
    { label: "Weight", value: pokemon.weight },
    { label: "Height", value: pokemon.height },
    { label: "Speed", value: pokemon.speed },
    { label: "HP", value: pokemon.hp },
    { label: "Attack", value: pokemon.attack },
    { label: "Defense", value: pokemon.defense },
  ];

  return (
    <div className="flex items-center justify-center py-10">
      <div className="rounded-[20px] shadow-xl w-full h-full max-w-[500px] max-h-[500px] mx-auto">
        <RadarChart
          cx={250}
          cy={250}
          width={500}
          height={500}
          data={data}
          className="responsive-chart"
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="label" />
          <PolarRadiusAxis angle={90} dx={20} dy={10} domain={[0, 50]} />
          <Radar
            name="Pokemon Stats"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    </div>
  );
}
