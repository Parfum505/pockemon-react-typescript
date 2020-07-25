import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../searchForm/search-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { getPockemonsList } from "../../redux/actions/pokemon-list.action";
import { List, ListItem } from "./pokemon-list.styles";
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
          pokemons.map((item) => (
            <ListItem key={item.id}>
              <Link to={`/${item.name}`}>
                <h4>{item.name}</h4>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                  alt="icon"
                />
              </Link>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default PokemonList;
