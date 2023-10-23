import styled from "styled-components";
import { colors } from "../../variables";


export const Border = styled.div`
    width: 300px;
    border: 1px currentColor solid;
`;

export const CircleText = styled.div`

    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg:first-child{
      height: 3rem;
      position: absolute;
    }

    svg.text {
      height: 300px;
      font-size: 0.765rem;
      fill: none;
    }
`;

export const SkillsArticle = styled.div`
    margin-top: 3rem;

    .container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 5rem 0;
    }

    h2 {
      color: ${colors.emerald};
      font-family: Brasika;
      font-size: 3rem;
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    ul {
      font-family: 'Archivo Black', sans-serif;
      font-size: 1.5rem;
      display: flex;
      gap: 2rem;
    }

    ul img {
      height: 70px;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    ul div {
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width: 960px) {
      .container{
        flex-direction: column;
      }
      ${Border}{
        display: none;
      }
      h2{
        font-size: 9vw;
      }
      ul {
        font-size: 1rem;
        gap: 1rem;
        img{
          height: 40px;
        }
        svg{
          height: 1rem;
          width: 1rem;
        }
        li{
          gap: 0.5rem;
        }
      }
    }
`;