import styled from "styled-components";
import { colors } from "../../variables";

export const Section = styled.section`
  
  display: flex;
  align-items: center;
  flex-direction: column; 

  h1{
    font-family: Brasika;
    color: ${colors.emerald};

    font-size: 4rem;
    line-height: 4rem;

    margin-top: 2rem;
  }

  h2{
    font-family: 'Archivo Black', sans-serif;
    font-size: 3rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 900px) {
    h1{
      font-size: 13vw;
      line-height: 13vw;
    }
    h2{
      font-size: 10vw;
      line-height: 10vw;
    }
  }
`;

export const Grid = styled.article`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2fr auto;
  gap: 1rem;
`;