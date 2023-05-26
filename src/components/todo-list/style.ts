import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  overflow-y: auto;
  max-height: 80vh;
`;
export const Container = styled.div``;
export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5px;
`;
export const Icon = styled.img`
  padding: 5px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  :hover {
    transform: scale(1.5);
  }
`;
export const EditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 5px 10px;
  border: none;
  margin-bottom: 10px;
  border-radius: 4px;
  align-items: center;
  text-decoration: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.main};
  /* background-color: #ffffcc; //NOT DONE */
  /* background-color: #b3ffb3; // DONE */
  :nth-child(1) {
    grid-column: span 1;
  }
  :nth-child(2) {
    grid-column: span 1;
  }
  :nth-child(3) {
    grid-column: span 5;
  }
  :nth-child(4) {
    grid-column: span 1;
  }
`;

// увеличить размер всего до 125%
