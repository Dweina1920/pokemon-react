import Header from "../componentes/Header";
import "./Container.css" ;
import PokemonBox from '../componentes/Pokemonbox';
function Container(){
    return (
        <div className="container">
            <Header />
            <PokemonBox/>
        </div>
    )
};


export default Container