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
    }
`;
export const Title = styled.h3`
    color: white;
    display: block;
`;
export const Redes = styled.div`
    display: flex;
    flex-direction: column;
    
    div{ 
        display: flex;

        svg{ 
            border: 1px solid white;
            border-radius: 50%;
            width: 15px;
            height: 15px;
            padding: 10px;
            margin-right: 10px;
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