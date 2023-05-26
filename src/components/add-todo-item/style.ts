import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  /* gap: 10px; */
  align-items: center;
  justify-content: center;
`;
export const AddInputLabel = styled.label`
  width: 100%;
  display: flex;
`;
export const AddInput = styled.input`
  width: 90%;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
`;
export const AddButton = styled.button`
  padding: 5px 15px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
