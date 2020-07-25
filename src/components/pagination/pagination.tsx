import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store/store";
import CustomButton from "../searchForm/customButton/custom-button";
import { PaginationContainer } from "./pagination.styles";
import { BASE_URL } from "../../data/baseUrl";

interface IPagination {
  onClickHandler: (url: string | null) => void;
}

const Pagination: React.FC<IPagination> = ({ onClickHandler }) => {
  const pokemonsList = useSelector((state: RootStore) => state.pokemonsList);
  const defaultUrl = BASE_URL + pokemonsList.limit;

  return (
    <PaginationContainer>
      <p>{`See all pokemons: Page ${pokemonsList.currentPage} of ${pokemonsList.lastPage}`}</p>
      <CustomButton
        isDisabled={!pokemonsList.urls.previous || pokemonsList.loading}
        btnType="button"
        value="First Page"
        clickHandler={() => onClickHandler(defaultUrl)}
      />
      <CustomButton
        isDisabled={!pokemonsList.urls.previous || pokemonsList.loading}
        btnType="button"
        value="Prev"
        clickHandler={() => onClickHandler(pokemonsList.urls.previous)}
      />
      <CustomButton
        isDisabled={!pokemonsList.urls.next || pokemonsList.loading}
        btnType="button"
        value="Next"
        clickHandler={() => onClickHandler(pokemonsList.urls.next)}
      />
    </PaginationContainer>
  );
};

export default React.memo(Pagination);
