import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #000;
    color: grey;
    margin-top: 50px;
    opacity: 0.94;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-sizing: border-box;
    font-size: 0.8rem;
    padding: 10vh 0;
    
    div{
        padding-left: 20px;

        p:hover {
            text-decoration: underline;
        }
    }
`;
export const Title = styled.h3`
    color: white;
    display: block;
    text-decoration: none;
`;
export const Redes = styled.div`
    display: flex;
    flex-direction: column;
    
    div{ 
        margin-top: 7px;
        display: flex;

        svg{ 
            border: 1px solid white;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            padding: 10px;
            margin-right: 10px;

            &:hover{
                cursor: pointer;
                transform: scale(1.1);
                opacity: 0.93;
            }
        }
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Contatos = styled.div`
    display: flex;
    flex-direction: column;
`;