import styled from "styled-components";
import { colors } from "../../variables";

export const Section = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  h1 {
    color: ${colors.emerald};
    font-family: Brasika;
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  iframe {
    border-radius: 2rem;
    width: 70vw;
    height: calc(100vw / 2.5);
    z-index: 1;
  }
  @media screen and (max-width: 900px) {
    iframe{
      width: 95vw;
      height: calc(100vw / 1.7);
    }
    h1{
      font-size: 13vw;
    }
  }
`;