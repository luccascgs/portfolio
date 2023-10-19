import styled from "styled-components";
import { colors } from "../../variables";

export const Label = styled.label`
    display: flex;
    height: 30vw;
    width: 30vw;
    img{
        border-radius: 2.1rem;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

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
`;