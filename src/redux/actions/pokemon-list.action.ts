import { Dispatch } from "redux";
import axios from "axios";
import {
  PokemonListDispatchType,
  PokemonListSetLimit,
  POKEMON_LIST_FETCHING_START,
  POKEMON_LIST_FETCHING_ERROR,
  POKEMON_LIST_FETCHING_SUCCESS,
  POKEMON_LIST_SET_LIMIT,
} from "../actionTypes/pokemon-list.action.type";

export const setLimit = (num: number): PokemonListSetLimit => {
  return { type: POKEMON_LIST_SET_LIMIT, payload: num };
};
export const getPockemonsList = (url: string) => async (
  dispatch: Dispatch<PokemonListDispatchType>
) => {
  try {
    dispatch({ type: POKEMON_LIST_FETCHING_START });
    const res = await axios.get(url);
    const urls = {
      next: res.data.next,
      previous: res.data.previous,
    };
    const pokemons = res.data.results.map(
      (item: { name: string; url: string }) => {
        const tempArr = item.url.split("/");
        const id = tempArr[tempArr.length - 2];
        return { name: item.name, id };
      }
    );
    dispatch({
      type: POKEMON_LIST_FETCHING_SUCCESS,
      payload: { urls, pokemons },
    });
  } catch (error) {
    dispatch({ type: POKEMON_LIST_FETCHING_ERROR, payload: error.message });
  }
};
