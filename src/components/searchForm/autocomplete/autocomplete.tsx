import React, { ChangeEvent, MouseEvent, useState, KeyboardEvent } from "react";
import { Container, Input, List, Item } from "./autocomplete.styles";

interface IAutoCompleteProps {
  suggestions: string[];
  inputValue: string;
  setInputValue: (value: string) => void;
}
const AutoComplete: React.FC<IAutoCompleteProps> = ({
  suggestions,
  inputValue,
  setInputValue,
}) => {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState<number>(0);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const filtered = suggestions.filter((suggestion) =>
      suggestion.startsWith(e.target.value.trim().toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveSuggestion(0);
  };
  const onClick = (e: MouseEvent<HTMLElement>) => {
    setShowSuggestions(false);
    setInputValue(e.currentTarget.innerText);
    setFilteredSuggestions([]);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 13) {
      setShowSuggestions(false);
      setInputValue(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion !== 0) {
        setActiveSuggestion((prev) => prev - 1);
      }
    } else if (e.keyCode === 40) {
      if (activeSuggestion !== filteredSuggestions.length - 1) {
        setActiveSuggestion((prev) => prev + 1);
      }
    }
  };
  let suggestionsListComponent;
  if (showSuggestions && inputValue) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <List>
          {filteredSuggestions.map((suggestion, index) => {
            const classActive = index === activeSuggestion ? "active" : "";
            return (
              <Item className={classActive} key={suggestion} onClick={onClick}>
                {suggestion}
              </Item>
            );
          })}
        </List>
      );
    } else {
      suggestionsListComponent = (
        <List className="no-suggestions">
          <Item className="">No suggestions, you're on your own!</Item>
        </List>
      );
    }
  }
  return (
    <Container>
      <Input
        type="text"
        onChange={onChangeHandler}
        onKeyDown={onKeyDown}
        value={inputValue}
        placeholder="Type Pokemon name"
      />
      {suggestionsListComponent}
    </Container>
  );
};

export default AutoComplete;
