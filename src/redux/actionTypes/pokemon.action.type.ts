export const POKEMON_FETCHING_START = "POKEMON_FETCHING_START";
export const POKEMON_FETCHING_SUCCESS = "POKEMON_FETCHING_SUCCESS";
export const POKEMON_LIST_FETCHING_SUCCESS = "POKEMON_FETCHING_SUCCESS";
export const POKEMON_LIST_SET_URL = "POKEMON_LIST_SET_URL";
export const ALL_POKEMONS_NAMES_FETCHING_SUCCESS =
  "ALL_POKEMONS_NAMES_FETCHING_SUCCESS";
export const POKEMON_FETCHING_ERROR = "POKEMON_FETCHING_ERROR";

type PokemonAbility = {
  ability: {
    name: string;
  };
};
type PokemonSprites = {
  front_default: string;
  back_default: string;
};

export type PaginationUrls = {
  next: string | null;
  previous: string | null;
  current: string;
};

export type Pokemon = {
  name: string;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
};
export type PokemonListItem = {
  name: string;
  id: number | string;
};
interface PokemonFetchingStart {
  type: typeof POKEMON_FETCHING_START;
}

interface PokemonFetchingSuccess {
  type: typeof POKEMON_FETCHING_SUCCESS;
  payload: Pokemon;
}
interface AllPokemonsNamesFetchingSuccess {
  type: typeof ALL_POKEMONS_NAMES_FETCHING_SUCCESS;
  payload: string[];
}
interface PokemonFetchingError {
  type: typeof POKEMON_FETCHING_ERROR;
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

export type PokemonDispatchType =
  | PokemonFetchingStart
  | PokemonFetchingSuccess
  | PokemonFetchingError;

export type PokemonListDispatchType =
  | PokemonListSetUrls
  | PokemonFetchingStart
  | PokemonListFetchingSuccess
  | PokemonFetchingError;

export type AllPokemonsNamesDispatchType = AllPokemonsNamesFetchingSuccess;
