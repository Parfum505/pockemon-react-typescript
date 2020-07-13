import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  position: relative;
`;
export const List = styled.ul`
  position: absolute;
  left: 0;
  top: 37px;
  background: white;
  border: 1px solid dodgerblue;
  border-top-width: 0;
  list-style: none;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
  &.no-suggestions {
    color: #999;
  }
`;
export const Item = styled.li`
  padding: 0.5rem;
  &:not(:last-of-type) {
    border-bottom: 1px solid dodgerblue;
  }
  &.active,
  &:hover {
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
    font-weight: 700;
  }
`;
export const Input = styled.input`
vertical-align: middle;
padding: 10px;
background-color: #fff;
border: 1px solid #ddd;
border-radius: 0;
width: 100%;
border-right: 0;
&:focus {
    border-color: dodgerblue;
    outline: none;
}
}
`;
