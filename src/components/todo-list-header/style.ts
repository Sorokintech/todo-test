import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  text-align: center;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  @media (max-width: 767px) {
    width: 300px;
    overflow: none;
  }
`;
export const Title = styled.h1`
  padding-top: 15px;
`;
export const LangButton = styled.div`
  border: none;
  border-radius: 4px;
  font-size: 10px;
  padding: 2px;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
