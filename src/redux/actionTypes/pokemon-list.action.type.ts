export const POKEMON_LIST_FETCHING_START = "POKEMON_LIST_FETCHING_START";
export const POKEMON_LIST_FETCHING_SUCCESS = "POKEMON_LIST_FETCHING_SUCCESS";
export const POKEMON_LIST_FETCHING_ERROR = "POKEMON_LIST_FETCHING_ERROR";
export const POKEMON_LIST_SET_LIMIT = "POKEMON_LIST_SET_LIMIT";

export type PaginationUrls = {
  next: string | null;
  previous: string | null;
};
export type PokemonListItem = {
  name: string;
  id: number | string;
};
interface PokemonListFetchingStart {
  type: typeof POKEMON_LIST_FETCHING_START;
}
interface PokemonListFetchingError {
  type: typeof POKEMON_LIST_FETCHING_ERROR;
  payload: string;
}
interface PokemonListFetchingSuccess {
  type: typeof POKEMON_LIST_FETCHING_SUCCESS;
  payload: { pokemons: PokemonListItem[]; urls: PaginationUrls };
}

export interface PokemonListSetLimit {
  type: typeof POKEMON_LIST_SET_LIMIT;
  payload: number;
}
export type PokemonListDispatchType =
  | PokemonListSetLimit
  | PokemonListFetchingStart
  | PokemonListFetchingSuccess
  | PokemonListFetchingError;
