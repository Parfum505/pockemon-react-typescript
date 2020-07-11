export const POKEMON_FETCHING_START = "POKEMON_FETCHING_START";
export const POKEMON_FETCHING_SUCCESS = "POKEMON_FETCHING_SUCCESS";
export const POKEMON_FETCHING_ERROR = "POKEMON_FETCHING_ERROR";

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};
type PokemonSprites = {
  front_default: string;
  back_default: string;
};
type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type Pokemon = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};
interface PokemonFetchingStart {
  type: typeof POKEMON_FETCHING_START;
}

interface PokemonFetchingSuccess {
  type: typeof POKEMON_FETCHING_SUCCESS;
  payload: Pokemon;
}
interface PokemonFetchingError {
  type: typeof POKEMON_FETCHING_ERROR;
  payload: string;
}

export type PokemonDispatchType =
  | PokemonFetchingStart
  | PokemonFetchingSuccess
  | PokemonFetchingError;
