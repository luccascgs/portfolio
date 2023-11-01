import styled from "styled-components";
import { colors } from "../../variables";

export const ScrollPc = styled.div`

    font-size: 0.7rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Archivo Black', sans-serif;

    svg {
        height: 1.3rem;
        margin-bottom: 0.2rem;
    }
    margin-bottom: 2rem;
`;

export const ScrollCell = styled.div`
    display: none;
    svg {
        height: 2rem;
        width: 2rem;
        color: ${colors.gray};
    }
    margin-bottom: 2rem;
`;

export const HeaderPc = styled.header`    

    width: 100%;
    height: calc(90vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: 'Bebas Neue', sans-serif;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        line-height: 3rem;
        font-size: 4rem;
    }

    h1 {
        font-family: Brasika;
        font-size: 5rem;
        line-height: 5rem;
    }

    h3 {
        font-family: 'Archivo Black', sans-serif;
        font-size: 2rem;
        line-height: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text {
        transform: translateX(200px) translateY(-30px) rotateZ(35deg);
        position: absolute;
        font-family: 'Bebas Neue', sans-serif;
        height: 170px;
        font-size: 0.7rem;
        fill: none;
    }

    .scribble {
        transform: translateY(10%);
        height: 9rem;
        width: auto;
        position: absolute;
    }
`;

export const HeaderCell = styled.header`
    display: none;
    height: calc(80vh - 50px);
    justify-content: center;
    svg{
        height:auto;
        width: 80vw;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
        ${HeaderPc}, ${ScrollPc}{
            display: none;
        }
        ${HeaderCell}, ${ScrollCell}{
            display: flex;
        }
    }
`;