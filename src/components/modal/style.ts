import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
  cursor: pointer;
`;

export const ModalBlock = styled.div`
  background-color: #ffffcc;
  position: relative;
  z-index: 5;
  margin: 0 35%;
  top: 30%;
  opacity: 1;
  border-radius: 4px;
  cursor: auto;
  display: flex;
  flex-direction: column;
`;
export const ModalBlockTop = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const Icon = styled.img`
  padding: 5px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const ModalContentLabel = styled.label`
  box-sizing: border-box;
  margin: 10px 10px;
`;
export const ModalContentInput = styled.input`
  box-sizing: border-box;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
`;
export const ModalTitle = styled.div``;
