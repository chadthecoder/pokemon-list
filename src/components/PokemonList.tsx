import { getPokemonNum, getSafeLink } from "../lib/pokemonAPI";
import Button from "./Button";
import Searchbar from "./SearchBar";

interface PokemonListProps
{
  pokemonList: any
  searchQuery?: any
}

export default async function PokemonList({pokemonList, searchQuery} : PokemonListProps) { //Header(props: string)

    /* if(searchQuery){
      console.log(searchQuery)
    } */

    async function showPokemon(){ 
      'use server'

      if(searchQuery){
        pokemonList?.filter(function (pokemon){
          if(pokemon.name == searchQuery) return pokemon
      }).map((pokemon) => (
          <>
          <Button linkRef={getSafeLink(getPokemonNum(pokemon.url, 4))} textData={pokemon.name}></Button>
          <br/>
          </>
      ))
      }
    }

          return  (
              <>

                
          {searchQuery ? pokemonList?.filter(function (pokemon)
            {
              if(pokemon.name.includes(searchQuery.toLowerCase())) return pokemon
              if(getPokemonNum(pokemon.url, 4).includes(searchQuery.toLowerCase())) return pokemon
            }).map((pokemon) => (
          <div key={pokemon.name}>
            <Button linkRef={getSafeLink(getPokemonNum(pokemon.url, 4))} textData={pokemon.name}></Button>
          <br/>
          </div>
      )) : pokemonList?.map((pokemon) => (
        <div key={pokemon.name}>
          <Button linkRef={getSafeLink(getPokemonNum(pokemon.url, 4))} textData={pokemon.name}></Button>
        <br/>
        </div>
    ))}
              </>
      );
    }