import React, { useEffect } from "react";
import SearchForm from "../searchForm/search-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { getAllPockemons } from "../../redux/actions/pokemon.action";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonsAllState = useSelector((state: RootStore) => state.pokemonsAll);
  const pokemonsList = pokemonsAllState.pokemons;
  console.log(pokemonsList);
  useEffect(() => {
    if (!pokemonsList) {
      dispatch(getAllPockemons());
    }
  }, [dispatch, pokemonsList]);
  return (
    <>
      <SearchForm />
      <p>All pokemons</p>
      <ul>
        {pokemonsList &&
          pokemonsList.map((name, idx) => <li key={idx}>{name}</li>)}
      </ul>
    </>
  );
};

export default PokemonList;
