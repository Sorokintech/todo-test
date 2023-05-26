import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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
  @media (max-width: 768px) {
    margin: 0 20%;
  }
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
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.15);
  }
  @media (max-width: 767px) {
    width: 14px;
    height: 14px;
  }
`;
export const ModalContentLabel = styled.label`
  box-sizing: border-box;
  margin: 10px 10px;
  @media (max-width: 767px) {
    margin: 5px 5px;
  }
`;
export const ModalContentInput = styled.input`
  box-sizing: border-box;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
  @media (max-width: 767px) {
    padding: 5px 10px;
  }
`;
export const ModalTitle = styled.div`
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
