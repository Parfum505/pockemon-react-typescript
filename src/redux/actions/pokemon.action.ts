import { Dispatch } from "redux";
import axios from "axios";
import {
  PokemonDispatchType,
  POKEMON_FETCHING_START,
  POKEMON_FETCHING_ERROR,
  POKEMON_FETCHING_SUCCESS,
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
