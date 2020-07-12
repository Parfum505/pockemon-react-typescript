export const POKEMON_FETCHING_START = "POKEMON_FETCHING_START";
export const POKEMON_FETCHING_SUCCESS = "POKEMON_FETCHING_SUCCESS";
export const ALL_POKEMONS_FETCHING_SUCCESS = "ALL_POKEMONS_FETCHING_SUCCESS";
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
export type PokemonName = {
  name: string;
};

export type Pokemon = {
  name: string;
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
};

interface PokemonFetchingStart {
  type: typeof POKEMON_FETCHING_START;
}

interface PokemonFetchingSuccess {
  type: typeof POKEMON_FETCHING_SUCCESS;
  payload: Pokemon;
}
interface AllPokemonsFetchingSuccess {
  type: typeof ALL_POKEMONS_FETCHING_SUCCESS;
  payload: PokemonName[];
}
interface PokemonFetchingError {
  type: typeof POKEMON_FETCHING_ERROR;
  payload: string;
}

export type PokemonDispatchType =
  | PokemonFetchingStart
  | PokemonFetchingSuccess
  | PokemonFetchingError;
export type AllPokemonsDispatchType =
  | PokemonFetchingStart
  | AllPokemonsFetchingSuccess
  | PokemonFetchingError;
