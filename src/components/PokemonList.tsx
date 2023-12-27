import { getPokemonNum } from "../lib/pokemonAPI";
import Button from "./Button";
import Searchbar from "./SearchBar";

interface PokemonListProps
{
  pokemonList: any
}

export default function PokemonList({pokemonList} : PokemonListProps) { //Header(props: string)
 
    //tried to make customizable header, could not figure out dropdown menu yet
    //let names = props.menu.split(',');

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