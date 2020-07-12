import { Dispatch } from "redux";
import axios from "axios";
import {
  PokemonDispatchType,
  AllPokemonsDispatchType,
  POKEMON_FETCHING_START,
  POKEMON_FETCHING_ERROR,
  POKEMON_FETCHING_SUCCESS,
  ALL_POKEMONS_FETCHING_SUCCESS,
} from "../actionTypes/pokemon.action.type";

export const getPockemonByName = (pokemonName: string) => async (
  dispatch: Dispatch<PokemonDispatchType>
) => {
  try {
    dispatch({ type: POKEMON_FETCHING_START });
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    dispatch({
      type: POKEMON_FETCHING_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: POKEMON_FETCHING_ERROR, payload: error.message });
  }
};
export const getAllPockemons = () => async (
  dispatch: Dispatch<AllPokemonsDispatchType>
) => {
  try {
    dispatch({ type: POKEMON_FETCHING_START });
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=2000"
    );
    const result = res.data.results;
    const pokemonsList = result.reduce(
      (arr: string[], item: { name: string }) => {
        arr.push(item.name);
        return arr;
      },
      []
    );
    dispatch({
      type: ALL_POKEMONS_FETCHING_SUCCESS,
      payload: pokemonsList,
    });
  } catch (error) {
    dispatch({ type: POKEMON_FETCHING_ERROR, payload: error.message });
  }
};
