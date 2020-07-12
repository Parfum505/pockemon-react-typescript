import {
    PokemonName,
    AllPokemonsDispatchType,
    POKEMON_FETCHING_START,
    POKEMON_FETCHING_ERROR,
    ALL_POKEMONS_FETCHING_SUCCESS,
  } from "../actionTypes/pokemon.action.type";

export interface PokemonsAllStateI {
    loading: boolean;
    pokemons?: PokemonName[];
    error: string;
  }
  const defaultState: PokemonsAllStateI = {
    loading: false,
    error: "",
  };

const pokemonsAllReducer = (
    state: PokemonsAllStateI = defaultState,
    action: AllPokemonsDispatchType
  ): PokemonsAllStateI => {
    switch (action.type) {
      case POKEMON_FETCHING_START:
        return { ...state, loading: true, error: "" };
      case POKEMON_FETCHING_ERROR:
        return { ...state, loading: false, error: action.payload };
      case ALL_POKEMONS_FETCHING_SUCCESS:
        return { ...state, pokemons: action.payload, loading: false };
      default:
        return state;
    }
  };

  export default pokemonsAllReducer;