import React, { FormEvent, useRef } from "react";
import { getPockemonByName } from "../../redux/actions/pokemon.action";
import { useDispatch } from "react-redux";

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const refInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pokemonName: string = refInput.current!.value.trim();
    if (pokemonName) {
      dispatch(getPockemonByName(pokemonName));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="find_pokemon">Find your pokemon:</label>
      <input
        type="text"
        id="find_pokemon"
        ref={refInput}
        placeholder="Pokemon name"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
