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
  background-color: #fff;
  position: relative;
  z-index: 5;
  margin: 0 30%;
  top: 30%;
  opacity: 1;
  border-radius: 4px;
  cursor: auto;
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.img`
  padding: 5px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const ModalContentInput = styled.input`
  padding: 10px 40px;
`;
export const ModalContentLabel = styled.label``;
export const ModalCloseBtn = styled.button`
  width: 10px;
  height: 10px;
`;
export const ModalTitle = styled.div``;
