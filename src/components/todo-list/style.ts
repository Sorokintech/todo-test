import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  /* background-color: #c6d9ec; */
`;
export const Container = styled.div``;
export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Icon = styled.img`
  padding: 5px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const EditContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const EditIcon = styled.img`
  padding: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const Item = styled.div`
  /* background-color: #fff; */
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 5px 10px;
  border: none;
  margin-bottom: 10px;
  border-radius: 4px;
  align-items: center;
  background-color: #ffffcc; //NOT DONE
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

// увеличить размер всего как в 125% при увеличении в браузере
