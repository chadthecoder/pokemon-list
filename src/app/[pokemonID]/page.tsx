import { getPokemonInfo } from "../../utils/pokemonAPI"
import Image from "next/image";
//import PokemonInfo from "../../../components/PokemonInfo";

import type { Metadata, ResolvingMetadata } from 'next'
 
type pokeIDProps = {
  params: { pokemonID: string }
}
 
export async function generateMetadata(
  { params }: pokeIDProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

    const pokemonInfoData = await getPokemonInfo(params.pokemonID);

    const pokeName = pokemonInfoData.name[0].toUpperCase() + pokemonInfoData.name.slice(1)
    const pokeTitle = pokeName+"'s Page"
 
  return {
    title: pokeTitle
  }
}

export default async function PokemonInfoPage({params}: pokeIDProps) {

    const pokemonInfoData = await getPokemonInfo(params.pokemonID);

return <div className="flex flex-col items-center p-10">
            <p>{pokemonInfoData.name[0].toUpperCase() + pokemonInfoData.name.slice(1)}</p>
            <Image
                src={pokemonInfoData.sprites.front_default} width={200} height={200} alt="Pokemon Picture"
            />
             <p>{"ID: "+pokemonInfoData.id}</p>
             <p>{"Height: "+pokemonInfoData.height}</p>
             <p>{"Weight: "+pokemonInfoData.weight}</p>
        </div>   
}