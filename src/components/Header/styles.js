import styled from "styled-components";
import { colors } from "../../variables";

export const Reactable = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    a{
      color: ${colors.white};
      text-decoration: none;
      padding-bottom: 0.5rem;
    }
    @media screen and (max-width: 600px) {
      display: flex;
    }
`;

export const Nav = styled.nav`
    font-family: 'Bebas Neue', sans-serif;
    height: 50px;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .logo {
      height: 30px;
    }

    div button{
      display: none;
    }

    div a+a {
      margin-left: 1rem;
    }

    * {
      color: ${colors.white};
      text-decoration: none;
    }
    @media screen and (max-width: 600px) {
        justify-content: space-between;
        padding:0 2rem;
        div a{
          display: none;
        }
        div button{
          display: block;
        }
    }
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;