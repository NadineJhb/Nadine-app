import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {

const handleIndex = (a, b) => {
  setPokemonIndex(a)
  b === "pikachu" && alert ("pika pikachu !")
}

  return (
    <div>
      {pokemonList.map((poke, index) => {
        return (
          <div key={index}>
            <button onClick={() => handleIndex(index, poke.name)}>{poke.name}</button>
          </div>
        );
      })}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array,
  setPokemonIndex: PropTypes.func,
};

export default NavBar;
