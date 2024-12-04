

import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";
import { IoHeartOutline } from "react-icons/io5";

 export const metadata = {
    title: 'Favoritos',
    description: 'HOLA HOLA HOLA HOLA'
} 

export default async function PokemonsPage({pokemon}) {


  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global state</small></span>
       {/*  <PokemonGrid pokemons={ [] }/> */}
        <FavoritePokemons /> 
    </div>
  );
}


