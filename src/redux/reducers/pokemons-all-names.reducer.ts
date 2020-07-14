import {
  AllPokemonsNamesDispatchType,
  ALL_POKEMONS_NAMES_FETCHING_SUCCESS,
} from "../actionTypes/pokemon.action.type";

export interface PokemonsAllStateI {
  pokemons: string[];
}
const defaultState: PokemonsAllStateI = {
  pokemons: [],
};

const pokemonsAllNamesReducer = (
  state: PokemonsAllStateI = defaultState,
  action: AllPokemonsNamesDispatchType
): PokemonsAllStateI => {
  switch (action.type) {
    case ALL_POKEMONS_NAMES_FETCHING_SUCCESS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};

export default pokemonsAllNamesReducer;
