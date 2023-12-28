interface PokemonInfoProps
{
  pokemonInfo: any
}

export default function PokemonInfo({pokemonInfo} : PokemonInfoProps) { //Header(props: string)
 
    //tried to make customizable header, could not figure out dropdown menu yet
    //let names = props.menu.split(',');
  
          return  (
              <div>
                {pokemonInfo?.map((pokemon) => (
                   
                    <div>
                    <p>{pokemon.name[0].toUpperCase()}</p>
                    <br/>
                    </div>
                    
                    
                    
                ))}
              </div>
      );
    }