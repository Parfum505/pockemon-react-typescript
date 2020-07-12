import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/pokemonDetails/pokemon-details";
import PokemonList from "./components/pokemonList/pokemon-list";

const App: React.FC = () => {
  // const pokemonState = useSelector((state: RootStore) => state.pokemon);
  // console.log(pokemonState);
  return (
    <BrowserRouter basename="/pockemon-react-typescript">
      <div className="App">
        <Switch>
          <Route path="/:name" component={PokemonDetails} />
          <Route path="/" component={PokemonList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
