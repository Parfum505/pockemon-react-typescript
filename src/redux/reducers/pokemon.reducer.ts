import {
  Pokemon,
  PokemonDispatchType,
  POKEMON_FETCHING_START,
  POKEMON_FETCHING_ERROR,
  POKEMON_FETCHING_SUCCESS,
} from "../actionTypes/pokemon.action.type";

export interface PokemontStateI {
  loading: boolean;
  pokemon?: Pokemon;
  error: string;
}
const defaultState: PokemontStateI = {
  loading: false,
  error: "",
};

const pokemonReducer = (
  state: PokemontStateI = defaultState,
  action: PokemonDispatchType
): PokemontStateI => {
  switch (action.type) {
    case POKEMON_FETCHING_START:
      return { ...state, loading: true, error: "" };
    case POKEMON_FETCHING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case POKEMON_FETCHING_SUCCESS:
      return { ...state, pokemon: action.payload, loading: false };
    default:
      return state;
  }
};

export default pokemonReducer;
