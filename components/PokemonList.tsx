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
                    <a href={pokemon.name}>{pokemon.name}</a>
                    <br/>
                    </div>
                    
                    
                    
                ))}
              </div>
      );
    }