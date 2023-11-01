import styled from "styled-components";
import { colors } from "../../variables";

export const Label = styled.label`
    display: flex;
    height: 30vw;
    width: 30vw;
    background-image: url("https://picsum.photos/536/354");

    border-radius: 2rem;
    footer{
        overflow: hidden;
        transition: 0.3s;
        opacity: 0;
        position: absolute;
        display: flex;
        height: 30vw;
        width: 30vw;
        justify-content: center;
        align-items: end;
        padding-bottom: 1rem;
        border-radius: 2rem;
        
        font-family: 'Archivo Black', sans-serif;
        font-size: 2rem;
        background: linear-gradient(rgba(0,0,0,0), ${colors.black} 100%);
        text-align: center;
    }
    h4{
        transition: 0.2s;
        transform: translateY(200%);
    }
    footer:hover{
        opacity: 1;
        h4{
            transform: translateY(0);
        }
    }
    @media screen and (max-width: 900px) {
        border-radius: 1rem;
        footer{
            font-size: 1rem;
            border-radius: 1rem;
        }
    }
    a{
        color: ${colors.white};
    }
`;