import styled from "styled-components";

export const PokemonCard = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  margin-bottom: 20px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
    li {
      padding: 5px;
      font-weight: bold;
    }
  }
`;
export const PokemonContainer = styled.div`
  background-color: white;
  width: 90%;
  max-width: 270px;
  text-align: left;
  margin: 0 auto;
`;
