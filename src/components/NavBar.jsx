
function NavBar( {pokemonIndex, setPokemonIndex, pokemonList}){

  function handleIncrement() {
    setPokemonIndex(pokemonIndex + 1);
  }

  function handleDecrement() {
    setPokemonIndex(pokemonIndex - 1);
  }


  return (
    <>
    {pokemonIndex > 0 && <button onClick={handleDecrement}>Précédent</button>}
    {pokemonIndex < pokemonList.length - 1 && <button onClick={handleIncrement}>Suivant</button>}
    </>
  )
}

export default NavBar;
