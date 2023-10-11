

function PokemonCard(props) {

  console.log(props);

    return (
      <>
      <figure>
        {props.pokemon.imgSrc !== undefined ? (<><img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>
        <figcaption>{props.pokemon.name}</figcaption></>) : (<><p>???</p><figcaption>{props.pokemon.name}</figcaption></>)}
      </figure>
      </>
    );
}
  
  export default PokemonCard;
