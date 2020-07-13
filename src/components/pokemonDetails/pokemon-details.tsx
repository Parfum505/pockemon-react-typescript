import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPockemonByName } from "../../redux/actions/pokemon.action";
import SearchForm from "../searchForm/search-form";
import { PokemonContainer, PokemonCard } from "./pokemon-details.styles";
import CustomButton from "../searchForm/customButton/custom-button";
const PokemonDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const history = useHistory();
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  useEffect(() => {
    if (name) {
      dispatch(getPockemonByName(name));
    }
  }, [name, dispatch]);
  const handelClickBtn = (): void => {
    history.push("/");
  };
  let noPokemonInfo = null;
  if (pokemonState.loading) {
    noPokemonInfo = <p>Loading...</p>;
  } else if (pokemonState.error) {
    noPokemonInfo = <p>{pokemonState.error}</p>;
  }
  return (
    <>
      <SearchForm />
      <PokemonContainer>
        {noPokemonInfo
          ? noPokemonInfo
          : pokemonState.pokemon && (
              <PokemonCard>
                <h2>Name: {pokemonState.pokemon.name}</h2>
                {pokemonState.pokemon.sprites.front_default && (
                  <img
                    src={pokemonState.pokemon.sprites.front_default}
                    alt="icon"
                  />
                )}

                {pokemonState.pokemon.sprites.back_default && (
                  <img
                    src={pokemonState.pokemon.sprites.back_default}
                    alt="icon"
                  />
                )}
                <h3>Abilities:</h3>
                <ul>
                  {pokemonState.pokemon.abilities.map((item, idx) => (
                    <li key={idx}>{item.ability.name}</li>
                  ))}
                </ul>
              </PokemonCard>
            )}
        <CustomButton
          btnType="button"
          clickHandler={handelClickBtn}
          value="Back to the list"
        />
      </PokemonContainer>
    </>
  );
};

export default PokemonDetails;
