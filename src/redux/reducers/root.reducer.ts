import { combineReducers } from "redux";
import pokemonReducer from "./pokemon.reducer";
import pokemonsAllNamesReducer from "./pokemons-all-names.reducer";
import pokemonsListReducer from "./pokemon-list.reducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsAllNames: pokemonsAllNamesReducer,
  pokemonsList: pokemonsListReducer,
});

export default rootReducer;
