import {
  PokemonListItem,
  PaginationUrls,
  PokemonListDispatchType,
  POKEMON_LIST_FETCHING_START,
  POKEMON_LIST_FETCHING_ERROR,
  POKEMON_LIST_FETCHING_SUCCESS,
  POKEMON_LIST_SET_LIMIT,
} from "../actionTypes/pokemon-list.action.type";

export interface PokemonsListStateI {
  loading: boolean;
  pokemons: PokemonListItem[];
  error: string;
  urls: PaginationUrls;
  limit: number;
}
const defaultState: PokemonsListStateI = {
  loading: false,
  error: "",
  pokemons: [],
  urls: {
    next: null,
    previous: null,
  },
  limit: 20,
};

const pokemonsListReducer = (
  state: PokemonsListStateI = defaultState,
  action: PokemonListDispatchType
): PokemonsListStateI => {
  switch (action.type) {
    case POKEMON_LIST_SET_LIMIT: {
      return { ...state, limit: action.payload };
    }
    case POKEMON_LIST_FETCHING_START:
      return { ...state, loading: true, error: "" };
    case POKEMON_LIST_FETCHING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case POKEMON_LIST_FETCHING_SUCCESS:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        urls: action.payload.urls,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default pokemonsListReducer;
