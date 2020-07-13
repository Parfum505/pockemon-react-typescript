import { Dispatch } from "redux";
import axios from "axios";
import {
  AllPokemonsNamesDispatchType,
  ALL_POKEMONS_NAMES_FETCHING_SUCCESS,
} from "../actionTypes/pokemon.action.type";
export const getAllPockemonsNames = () => async (
    dispatch: Dispatch<AllPokemonsNamesDispatchType>
  ) => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=2000"
      );
      const result = res.data.results;
      const pokemonsList = result
        .reduce((arr: string[], item: { name: string }) => {
          arr.push(item.name.toLowerCase());
          return arr;
        }, [])
        .sort();
      dispatch({
        type: ALL_POKEMONS_NAMES_FETCHING_SUCCESS,
        payload: pokemonsList,
      });
    } catch (error) {
      console.log(error.message);
    }
  };