import { getPokemonInfo } from "../../../lib/pokemonAPI"
import Image from "next/image";
//import PokemonInfo from "../../../components/PokemonInfo";

export default async function PokemonInfoPage({params}: {params: {pokemonID: string}}) {

    //console.log("info page: "+params.pokemonID)
    const pokemonInfoData = await getPokemonInfo(params.pokemonID);
    //console.log(pokemonInfoData)

return <div>
            <p>{pokemonInfoData.name}</p>
            <Image
                src={pokemonInfoData.sprites.front_default} width={200} height={200} alt="Pokemon Picture"
            />
        </div>
    
}