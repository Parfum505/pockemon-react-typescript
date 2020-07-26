import React, { useEffect, useState, useCallback } from "react";
import SearchForm from "../searchForm/search-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { getPockemonsList } from "../../redux/actions/pokemon-list.action";
import { List } from "./pokemon-list.styles";
import PokemonItem from "./pokemonListItem/pokemon-list-item";
import Pagination from "../pagination/pagination";
import { BASE_URL } from "../../data/baseUrl";

const PokemonList: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>(null!);
  const dispatch = useDispatch();
  const pokemonsList = useSelector((state: RootStore) => state.pokemonsList);
  const pokemons = pokemonsList.pokemons;
  const defaultUrl = BASE_URL + pokemonsList.limit;

  useEffect(() => {
    if (!pokemons.length) {
      setCurrentUrl(defaultUrl);
    }
  }, [pokemons.length, defaultUrl]);

  useEffect(() => {
    dispatch(getPockemonsList(currentUrl));
  }, [dispatch, currentUrl]);

  const onClickPagination = useCallback((url: string | null): void => {
    if (url) {
      setCurrentUrl(url);
    }
  }, []);

  return (
    <>
      <SearchForm />
      <Pagination onClickHandler={onClickPagination} />
      <List>
        {pokemons &&
          pokemons.map((item) => <PokemonItem key={item.id} item={item} />)}
      </List>
    </>
  );
};

export default PokemonList;
