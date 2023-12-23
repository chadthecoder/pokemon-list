import { getPokemonNum } from "../lib/pokemonAPI";

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
                    <div className="w-96">
                    <a
                      href={getPokemonNum(pokemon.url, 4)}
                      className="bg-pink-900 w-3 h-3 block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
                    >{pokemon.name}</a>
                    <br/>
                    </div>
                ))}
              </>
      );
    }