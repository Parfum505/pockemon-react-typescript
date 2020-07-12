import styled from "styled-components";

export const Title = styled.h1`
    margin: 5px 10px 15px 0;
    width: 100%;
    font-size: 1.5rem;
  }
`;
export const Input = styled.input`
    vertical-align: middle;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0;
    flex: 1;
    border-right: 0;
    &:focus {
        border-color: dodgerblue;
        outline: none;
    }
  }
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    width: 90%;
    max-width: 300px;
    margin: 10px auto 30px;
    text-align: left;
    align-items: center;
}
`;
