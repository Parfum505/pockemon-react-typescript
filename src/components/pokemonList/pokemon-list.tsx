import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../searchForm/search-form";
import CustomButton from "../searchForm/customButton/custom-button";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { getPockemonsList } from "../../redux/actions/pokemon-list.action";
import { PaginationContainer, List, ListItem } from "./pokemon-list.styles";

const defaultUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

const PokemonList: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>(null!);
  const dispatch = useDispatch();
  const pokemonsList = useSelector((state: RootStore) => state.pokemonsList);
  const pokemons = pokemonsList.pokemons;

  useEffect(() => {
    if (!pokemons.length) {
      setCurrentUrl(defaultUrl);
    }
  }, [pokemons]);

  useEffect(() => {
    dispatch(getPockemonsList(currentUrl));
  }, [dispatch, currentUrl]);

  // const loadFirstPage = () => {
  //   dispatch(setCurrentUrl(defaultUrl));
  // };
  const onClickPagination = (url: string | null) => {
    if (url) {
      setCurrentUrl(url);
    }
  };
  return (
    <>
      <SearchForm />
      <PaginationContainer>
        <p>See all pokemons</p>
        <CustomButton
          isDisabled={!pokemonsList.urls.previous || pokemonsList.loading}
          btnType="button"
          value="Prev"
          clickHandler={() => onClickPagination(pokemonsList.urls.previous)}
        />
        <CustomButton
          isDisabled={!pokemonsList.urls.next || pokemonsList.loading}
          btnType="button"
          value="Next"
          clickHandler={() => onClickPagination(pokemonsList.urls.next)}
        />
      </PaginationContainer>

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
