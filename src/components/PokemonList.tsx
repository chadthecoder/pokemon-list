import { getPokemonNum, getSafeLink } from "../utils/pokemonAPI";
import Button from "./Button";

interface PokemonListProps
{
  pokemonList: any
  searchQuery?: any
}

export default async function PokemonList({pokemonList, searchQuery} : PokemonListProps) {

          return  (
              <>

                
          {searchQuery ? pokemonList?.filter(function (pokemon: {name: string, url: string})
            {
              if(pokemon.name.includes(searchQuery.toLowerCase())) return pokemon
              if(getPokemonNum(pokemon.url, 4).includes(searchQuery.toLowerCase())) return pokemon
            }).map((pokemon: {name: string, url: string}) => (
          <div key={pokemon.name}>
            <Button linkRef={getSafeLink(getPokemonNum(pokemon.url, 4))} textData={pokemon.name}></Button>
          <br/>
          </div>
      )) : pokemonList?.map((pokemon: {name: string, url: string}) => (
        <div key={pokemon.name}>
          <Button linkRef={getSafeLink(getPokemonNum(pokemon.url, 4))} textData={pokemon.name}></Button>
        <br/>
        </div>
    ))}
              </>
      );
    }