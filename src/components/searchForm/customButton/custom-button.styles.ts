import styled from "styled-components";

export const Button = styled.input`
  padding: 11px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: royalblue;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
