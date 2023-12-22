//import Image from 'next/image'
import PokemonList from "../../components/PokemonList";
import Pokemons from "../../components/PokemonList";
import { getPokemonList } from "../../lib/pokemonAPI";

/* async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  //let data2 = await data.json()
  return data.json();
} */



export default async function Home() {

  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
 /*  const staticData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(
      response => response.json()
    ).then(function(allpokemon)
    {
      allpokemon.results.forEach(function(pokemon: string)
        {
          fetchPokemonData(pokemon);
        })
    }) */

/*     function createTypes(types, ul)
    {
        types.forEach(function(type)
        {
            let typeLi = document.createElement('li');
            typeLi.innerText = type['type']['name'];
            ul.append(typeLi)
        })
    } */

/*     function renderPokemon(pokeData)
    {
      let allPokemonContainer = document.getElementById('poke-container');
      let pokeContainer = document.createElement("div")
      //div will be used to hold the data/details for indiviual pokemon.{}
      let pokeName = document.createElement('h4')
      pokeName.innerText = pokeData.name
      let pokeNumber = document.createElement('p')
      pokeNumber.innerText = `#${pokeData.id}`
      let pokeTypes = document.createElement('ul')
      //ul list will hold the pokemon types
      createTypes(pokeData.types, pokeTypes)
      // helper function to go through the types array and create li tags for each one
      pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
      //appending all details to the pokeContainer div
      allPokemonContainer.appendChild(pokeContainer);       
      //appending that pokeContainer div to the main div which will hold all the pokemon cards
    } */

/*     function fetchPokemonData(pokemon)
    {
      let url = pokemon.url
      // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData)
      {
        //console.log(pokeData)
        //renderPokemon(pokeData)
      })
    } */
   
/*     function fetchKantoPokemon()
    {
       fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
       .then(response => response.json())
       .then(function(allpokemon)
       {
          allpokemon.results
          .forEach(function(pokemon)
          {
            fetchPokemonData(pokemon);
         })
       })
    } */

    //fetchKantoPokemon()

    

    //let {pokemon} = await getPokemon()

    const pokemonListData = await getPokemonList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <PokemonList pokemonList={pokemonListData}></PokemonList>
    </main>
  )
}
