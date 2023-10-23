import styled from "styled-components";
import { colors } from "../../variables";

export const Title = styled.div`
  height: 70vh;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    height: 20vh;
  }
`;

export const Container = styled.div`
  font-family: 'Archivo Black', sans-serif;
  font-size: 20vh;
  line-height: 20vh;
  z-index: -1;
  transform: rotateZ(-10deg);

  @media screen and (max-width: 900px) {
    font-size: 5vh;
    line-height: 5vh;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
`;

export const Border = styled.div`
  border: 10px ${colors.emerald} solid;
  background-color: ${colors.emerald};
  @media screen and (max-width: 900px) {
    border: 5px ${colors.emerald} solid;
  }
`;

export const Outline = styled.h1`
  color: transparent;
  -webkit-text-stroke-width: 0.1vh;
  -webkit-text-stroke-color: ${colors.white};
`;