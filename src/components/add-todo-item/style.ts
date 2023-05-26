import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    width: 290px;
    overflow: hidden;
  }
`;
export const AddInputLabel = styled.label`
  width: 100%;
  display: flex;
`;
export const AddInput = styled.input`
  width: 90%;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  @media (max-width: 767px) {
    padding: 5px 10px;
    width: 80%;
  }
`;
export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  @media (max-width: 767px) {
    padding: 5px 15px;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
