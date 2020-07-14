import React, { FormEvent, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import CustomButton from "./customButton/custom-button";
import { Form, Title } from "./search-form.styles";
import AutoComplete from "./autocomplete/autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import { getAllPockemonsNames } from "../../redux/actions/pokemons-all-names.action";

const SearchForm: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const dispatch = useDispatch();
  const pokemonsAllState = useSelector((state: RootStore) => state.pokemonsAllNames);
  const pokemonsNames = pokemonsAllState.pokemons;

  useEffect(() => {
    if (!pokemonsNames?.length) {
      dispatch(getAllPockemonsNames());
    }
  }, [dispatch, pokemonsNames]);

  const history = useHistory();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pokemonName: string = userInput.trim();

    if (pokemonName) {
      setUserInput("");
      history.push(`/${pokemonName}`);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Find your pokemon:</Title>
      <AutoComplete
        suggestions={pokemonsNames}
        inputValue={userInput}
        setInputValue={setUserInput}
      />
      <CustomButton btnType="submit" value="Search" />
    </Form>
  );
};
export default React.memo(withRouter(SearchForm));
