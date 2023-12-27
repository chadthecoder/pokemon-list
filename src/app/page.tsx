//import Image from 'next/image'
import PokemonList from "../components/PokemonList";
import { getPokemonList } from "../lib/pokemonAPI";
import Searchbar from "@/components/SearchBar";

export default async function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined

    const pokemonListData = await getPokemonList();

    if(search){
      console.log(search)
    }
    else console.log('failsauce')

  return (
    /*<main className="flex min-h-screen flex-col items-center justify-between p-24">*/
     <>
     <Searchbar pokemonNames={pokemonListData}/>
      <PokemonList pokemonList={pokemonListData} searchQuery={search}></PokemonList>
      
      </>
    /*</main>*/
  )
}
