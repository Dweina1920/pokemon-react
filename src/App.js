
import Image from './img/poke-logo.png';
//---import img from './src/img/poke-logo.png';
import './App.css';

function App() {
  return (
    <div className="container"> 
      <header className="header">
        <div className="header-bg"></div>
        <img
          className="header-logo"
          src={Image}
          alt="pokemon-logo"></img>
        <nav className="header-search_bar">
          <input type="text" name="search" placeholder="Search" ></input>
          <button type="submit">GO</button>
        </nav>
      </header>
      <main className="list-pokemons">
        <article className="list-pokemons-item">
          <div className="list-pokemons-item-content">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="pokemon-1"
            ></img>
            <h3>
              Bulbasaur
              <span>gras</span>
            </h3>
          </div>
        </article>
      </main>

      </div>
  );
}

export default App;
