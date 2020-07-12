import React from "react";
import { PokemontStateI } from "../../redux/reducers/pokemon.reducer";

interface IPokemonDetaisProps {
  pokemonState: PokemontStateI;
}

const PokemonDetails: React.FC<IPokemonDetaisProps> = ({ pokemonState }) => {
  if (pokemonState.loading) {
    return <p>Loading...</p>;
  }
  if (pokemonState.error) {
    return <p>{pokemonState.error}</p>;
  }
  return (
    <div>
      {pokemonState.pokemon && (
        <div>
          <h2>Name: {pokemonState.pokemon.name}</h2>
          <h3>Species: {pokemonState.pokemon.species.name}</h3>
          <img src={pokemonState.pokemon.sprites.front_default} alt="icon" />
          <img src={pokemonState.pokemon.sprites.back_default} alt="icon" />
          <p>Abilities:</p>
          <ul>
            {pokemonState.pokemon.abilities.map((item, idx) => (
              <li key={idx}>{item.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
