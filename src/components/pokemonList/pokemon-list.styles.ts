import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;
export const ListItem = styled.li`
  margin: 8px;
  text-align: center;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  }
  h4 {
    margin: 10px 0 0;
    padding: 5px;
  }
  a {
    text-decoration: none;
    color: brack;
  }
`;
