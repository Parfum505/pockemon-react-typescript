import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store/store";

const App: React.FC = () => {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  return <div className="App">Pockemon</div>;
};

export default App;
