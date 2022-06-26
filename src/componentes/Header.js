import logopoke from "../img/poke-logo.png";
import bgheader from "../img/vago.webp";

function Header() {
  return (
    <header className="header">
      <div className="header-bg"></div>
      <img className="header-logo" alt=" " src={logopoke}></img>
      <nav class="header-search_bar">
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">GO</button>
      </nav>
    </header>
  )
};

export default Header