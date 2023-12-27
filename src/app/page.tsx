//import Image from 'next/image'
import PokemonList from "../components/PokemonList";
import Pokemons from "../components/PokemonList";
import { getPokemonList } from "../lib/pokemonAPI";



export default async function Home() {

    const pokemonListData = await getPokemonList();

  return (
    /*<main className="flex min-h-screen flex-col items-center justify-between p-24">*/
      
      <PokemonList pokemonList={pokemonListData}></PokemonList>
    /*</main>*/
  )
}
