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
        console.log("infoFunc: "+name)
        const data = await res.json()
        return data;
      } catch (error) {
        notFound()
        //return { message: 'Database Error: Failed to Get Pokemon' };
      }
}