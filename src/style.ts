import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/background/bgp.jpg");
  background-repeat: none;
  background-size: cover;
  @media (max-width: 767px) {
    width: 100%;
    height: 110vh;
    overflow: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
