import styled from "styled-components";

export const Form = styled.form`
  display: flex;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  visibility: hidden;
  overflow: hidden;
  width: 1px;
  height: 1px;
`;

export const SearchField = styled.input`
  width: 100%;
  padding: 10px 30px 10px 10px;
  border: 1px solid silver;
  font-size: 17px;
  outline: none;
`;

export const ClearIcon = styled.button`
  position: absolute;
  top: 11px;
  right: 6px;
  width: 20px;
  height: 20px;
  border: none;
  font-size: 18px;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  font-size: 17px;
  border: 1px solid silver;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
