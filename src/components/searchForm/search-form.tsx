import React, { FormEvent, useRef } from "react";
import { withRouter, useHistory } from "react-router-dom";
import CustomButton from "./customButton/custom-button";
import { Form, Title, Input } from "./search-form.styles";

const SearchForm: React.FC = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pokemonName: string = refInput.current!.value.trim();
    refInput.current!.value = "";
    if (pokemonName) {
      history.push(`/${pokemonName}`);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Find your pokemon:</Title>
      <Input
        type="text"
        id="find_pokemon"
        ref={refInput}
        placeholder="Pokemon name"
      />
      <CustomButton btnType="submit" value="Search" />
    </Form>
  );
};
export default React.memo(withRouter(SearchForm));
