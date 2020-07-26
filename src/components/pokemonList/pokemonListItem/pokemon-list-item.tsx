import React from "react";
import {Link} from "react-router-dom";
import {ListItem} from "./pokemon-list-item.styles";
import {PokemonListItem} from "../../../redux/actionTypes/pokemon-list.action.type";

interface IPokemonListItem {
    item: PokemonListItem
}
const PokemonItem: React.FC<IPokemonListItem> = ({item}) => (
    <ListItem key={item.id}>
              <Link to={`/${item.name}`}>
                <h4>{item.name}</h4>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                  alt="icon"
                />
              </Link>
            </ListItem>
);

export default PokemonItem;