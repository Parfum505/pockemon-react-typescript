export const POKEMON_LIST_FETCHING_START = "POKEMON_LIST_FETCHING_START";
export const POKEMON_LIST_FETCHING_SUCCESS = "POKEMON_FETCHING_SUCCESS";
export const POKEMON_LIST_FETCHING_ERROR = "POKEMON_FETCHING_ERROR";
export const POKEMON_LIST_SET_URL = "POKEMON_LIST_SET_URL";

export type PaginationUrls = {
  next: string | null;
  previous: string | null;
  current: string;
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

export interface PokemonListSetUrls {
  type: typeof POKEMON_LIST_SET_URL;
  payload: string;
}
export type PokemonListDispatchType =
  | PokemonListSetUrls
  | PokemonListFetchingStart
  | PokemonListFetchingSuccess
  | PokemonListFetchingError;
