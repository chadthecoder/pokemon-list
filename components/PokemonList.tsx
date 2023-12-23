import { getPokemonNum } from "../lib/pokemonAPI";

interface PokemonListProps
{
  pokemonList: any
}

export default function PokemonList({pokemonList} : PokemonListProps) { //Header(props: string)
 
    //tried to make customizable header, could not figure out dropdown menu yet
    //let names = props.menu.split(',');

          return  (
              <div>
                {pokemonList?.map((pokemon) => (
                    <div>
                    <a href={getPokemonNum(pokemon.url, 4)}>{pokemon.name}</a>
                    <br/>
                    </div>
                    
                    
                    
                ))}
              </div>
      );
    }