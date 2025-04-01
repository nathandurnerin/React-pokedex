import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <h2>{pokemon.name}</h2>
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </div>
  );
}

export default PokemonCard;
