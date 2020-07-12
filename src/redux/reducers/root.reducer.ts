import { combineReducers } from "redux";
import pokemonReducer from "./pokemon.reducer";
import pokemonsAllReducer from "./pokemons-all.reducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsAll: pokemonsAllReducer,
});

export default rootReducer;
