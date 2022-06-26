
import pokemons from "../Api/data";



function PokemonBox() {
    return (
        <div className="list-pokemons">
            {pokemons.map((pokemon) => {
                
                return (<article className="list-pokemons-item">
                    <div className="list-pokemons-item-content">
                        <img
                            src={pokemon.sprite}
                            alt="pokemon-1"
                        />
                        <h3>
                            {pokemon.name}
                            <span>{pokemon.type}</span>
                        </h3>
                    </div>
                </article>)

            })
            }
        </div>
    )
}


export default PokemonBox;