import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/store/store";
import CustomButton from "../searchForm/customButton/custom-button";
import { PaginationContainer } from "./pagination.styles";
import { BASE_URL } from "../../data/baseUrl";
import LimitPerPage from "../limitPerPage/limit-per-page";
import { setLimit } from "../../redux/actions/pokemon-list.action";

interface IPagination {
  onClickHandler: (url: string | null) => void;
}

const Pagination: React.FC<IPagination> = ({ onClickHandler }) => {
  const dispatch = useDispatch();
  const pokemonsList = useSelector((state: RootStore) => state.pokemonsList);
  const defaultUrl = BASE_URL + pokemonsList.limit;
  const setLimitPerPage = useCallback(
    (newLimit) => {
      dispatch(setLimit(newLimit));
      onClickHandler(BASE_URL + newLimit);
    },
    [onClickHandler, dispatch]
  );
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
      <LimitPerPage limit={pokemonsList.limit} setNewLimit={setLimitPerPage} />
    </PaginationContainer>
  );
};

export default React.memo(Pagination);
