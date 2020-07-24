import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/pokemonDetails/pokemon-details";
import PokemonList from "./components/pokemonList/pokemon-list";

const App: React.FC = () => (
    <BrowserRouter basename="/pockemon-react-typescript">
      <div className="App">
        <Switch>
          <Route path="/:name" component={PokemonDetails} />
          <Route path="/" exact component={PokemonList} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default App;
