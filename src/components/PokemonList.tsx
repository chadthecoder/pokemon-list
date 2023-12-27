import { getPokemonNum } from "../lib/pokemonAPI";
import Button from "./Button";
import Searchbar from "./SearchBar";

interface PokemonListProps
{
  pokemonList: any
  searchQuery?: any
}

export default function PokemonList({pokemonList, searchQuery} : PokemonListProps) { //Header(props: string)
 
    if(searchQuery){
      console.log(searchQuery)
    }

          return  (
              <>

                

                {pokemonList?.map((pokemon) => (
                    <>
                    <Button linkRef={getPokemonNum(pokemon.url, 4)} textData={pokemon.name}></Button>
                    <br/>
                    </>
                ))}
              </>
      );
    }