
function NavBar( { pokemonIndex, pokemonList, setPokemonIndex} ){
  
  return (
        <div>
         {pokemonList.map((poke, index) => {
         return (
         <div key={index}>
           <button onClick={() => setPokemonIndex(index)}>{poke.name}</button>
         </div>
         )
})
}
         </div>
  );
}

export default NavBar;