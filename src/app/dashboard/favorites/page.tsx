import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
    title: 'Favoritos',
    description: 'HOLA HOLA HOLA HOLA'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global state</small></span>
        <PokemonGrid pokemons={ [] }/>

    </div>
  );
}