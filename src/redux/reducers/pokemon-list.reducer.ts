import {
  PokemonListItem,
  PaginationUrls,
  PokemonListDispatchType,
  POKEMON_FETCHING_START,
  POKEMON_FETCHING_ERROR,
  POKEMON_LIST_FETCHING_SUCCESS,
  POKEMON_LIST_SET_URL,
} from "../actionTypes/pokemon.action.type";

export interface PokemonsListStateI {
  loading: boolean;
  pokemons?: PokemonListItem[];
  error: string;
  urls: PaginationUrls;
}
const defaultState: PokemonsListStateI = {
  loading: false,
  error: "",
  urls: {
    next: null,
    previous: null,
    current: "",
  },
};

const pokemonsListReducer = (
  state: PokemonsListStateI = defaultState,
  action: PokemonListDispatchType
): PokemonsListStateI => {
  switch (action.type) {
    case POKEMON_LIST_SET_URL: {
      const newUrls = { ...state.urls, current: action.payload };
      return { ...state, urls: newUrls };
    }
    case POKEMON_FETCHING_START:
      return { ...state, loading: true, error: "" };
    case POKEMON_FETCHING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case POKEMON_LIST_FETCHING_SUCCESS:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        urls: action.payload.urls,
        loading: false,
        error: ""
      };
    default:
      return state;
  }
};

export default pokemonsListReducer;
