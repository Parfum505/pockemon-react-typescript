import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../searchForm/search-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import {
  getPockemonsList,
  setCurrentUrl,
} from "../../redux/actions/pokemon-list.action";

const defaultUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonsList = useSelector((state: RootStore) => state.pokemonsList);
  const pokemons = pokemonsList.pokemons;
  const currentUrl = pokemonsList.urls.current;

  useEffect(() => {
    if (!currentUrl) {
      dispatch(setCurrentUrl(defaultUrl));
    }
  }, [dispatch, currentUrl]);

  useEffect(() => {
    dispatch(getPockemonsList(currentUrl));
  }, [dispatch, currentUrl]);

  return (
    <>
      <SearchForm />
      <p>All pokemons</p>
      <ul>
        {pokemons &&
          pokemons.map((item) => (
            <li key={item.id}>
              <Link to={`/${item.name}`}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PokemonList;
