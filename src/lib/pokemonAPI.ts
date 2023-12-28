import exp from 'constants';
import { notFound } from 'next/navigation'

const POKE_API = "https://pokeapi.co/api/v2/"

export async function getPokemonList() {
    const res = await fetch(POKE_API+"pokemon?limit=151")
    const data = await res.json()
    return data.results;
}

export async function getPokemonInfo(name: string) {
    //const res = await fetch(POKE_API+"pokemon/"+name)
    //console.log("infoFunc: "+name)
    //const data = await res.json()
    //return data;

    try {
        const res = await fetch(POKE_API+"pokemon/"+name)
        //console.log("infoFunc: "+name)
        const data = await res.json()
        return data;
      } catch (error) {
        console.log("this does not exist")
        //notFound()
        //return { message: 'Database Error: Failed to Get Pokemon' };
      }
}

export function getPokemonNum(url: string, index: number)
{
  var pathname = new URL(url).pathname;
  var paths = pathname.split("/")
  return paths[index]
}

export function getRandomPokemonNum(min: number, max: number)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomPokemonPage(pokemonNum: number)
{
    return ("/"+pokemonNum.toString());
}