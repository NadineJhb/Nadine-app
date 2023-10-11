
import PropTypes from "prop-types";

function PokemonCard( {pokemon} ) {

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
  }).isRequired,
}

  console.log(pokemon);

    return (
      <>
      <figure>
        {pokemon.imgSrc !== undefined ? 
        
        <>
        <img src={pokemon.imgSrc} alt={pokemon.name}/>
        <figcaption>{pokemon.name}</figcaption></>
        
        :

        <>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
        </>
        }
      </figure>
      </>
    );
}
  
  export default PokemonCard;
