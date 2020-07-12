import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store/store";
import SearchForm from "./components/searchForm/search-form";
import PokemonDetails from "./components/pokemonDetais/pokemon-detais";

const App: React.FC = () => {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  console.log(pokemonState);
  return (
    <div className="App">
      <SearchForm />
      <PokemonDetails pokemonState={pokemonState} />
    </div>
  );
};

export default App;
