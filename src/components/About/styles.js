import styled from "styled-components";
import { colors } from "../../variables";


export const Quote = styled.div`
    
    display: flex;
    border-left: 2px ${colors.gray} solid;
    margin-bottom: 3rem;
    
    span {
      font-family: Brasika;
    }
    
    p {
      margin: 0;
    }

    span {
        color: ${colors.gray};
        font-size: 3rem;
        line-height: 0;
        transform: translateY(70%);
        margin: 0 1rem;
    }
    
    p {
        text-align: right;
    }
    `;

export const Column1 = styled.div`
    padding: 0 2rem;
    width: 45%;
    `;

export const Column2 = styled.div`
    width: 55%;
    padding: 0 2rem;
`;

export const Section = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    img {
      height: 90vh;
      width: 100%;
      object-fit: cover;
      border-radius: 3rem;
    }

    h1 {
      color: ${colors.emerald};
      font-family: Brasika;
      font-size: 5rem;
      line-height: 4rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    a {
      color: ${colors.emerald};
    }

    .contacts {
      display: flex;
      justify-content: center;
    }

    a+a {
        margin-left: 2rem;
    }
    
    @media screen and (max-width: 1200px) {
        ${Column1}, ${Column2}{
            width: 50%;
            padding: 1rem;
        }
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        height: auto;

        img{
            height: 400px;
        }
        ${Column1}, ${Column2}{
            width: 80%;
            padding:0;
        }
        h1{
            font-size: 12vw;
            margin: 1rem 0;
            text-align: center;
        }
    }
`;