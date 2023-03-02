import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 5px;
  color: white;
  width: 200px;
  height: 25px;
  border: 1px solid black;
  outline: none;
  border-radius: 10px;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  caret-color: orange;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  background-color: black;
  color: white;
  border: transparent;
  outline: transparent;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;
