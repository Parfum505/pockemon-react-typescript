import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../searchForm/search-form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";

const PokemonList: React.FC = () => {
  //   const dispatch = useDispatch();
  const pokemonsAllState = useSelector((state: RootStore) => state.pokemonsAll);
  //   console.log(pokemonsList);
  //   useEffect(() => {
  //     if (!pokemonsList?.length) {
  //       dispatch(getAllPockemons());
  //     }
  //   }, [dispatch, pokemonsList]);
  return (
    <>
      <SearchForm />
      <p>All pokemons</p>
      <ul>
        {/* {pokemonsList &&
          pokemonsList.map((name, idx) => (
            <li key={idx}>
              <Link to={`/${name}`}>{name}</Link>
            </li>
          ))} */}
      </ul>
    </>
  );
};

export default PokemonList;
