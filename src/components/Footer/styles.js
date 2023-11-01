import styled from "styled-components";
import { colors } from "../../variables";

export const Container = styled.footer`

    margin-top: 2rem;
    background-color: ${colors.black};
    height: 130px;
    display: flex;
    justify-content: center;
    
    *{
        color: ${colors.white};
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        margin: auto;
        width: 70vw;
        padding-top: 1rem;

        border-top: solid 1px ${colors.gray};
        span, ul{
            width: ${100 / 3 + "%"};
        }
    }
    
    ul{
        *{
            float: right;
            margin-left: 0.5rem;
        }
    }

    svg{
        height: 32px;
    }
    @media screen and (max-width: 600px) {
        div {width: 80%;}
        span{display: none;};
        ul {width: 50%!important;};
    }
`;