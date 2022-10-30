import styled from "styled-components";

export const Container = styled.p`  
    width: 950px;    
    margin: auto;
    display: flex;
    gap: 3px;
    overflow-x: auto;    
    scroll-behavior: smooth;
    align-items: center;
        
    &::-webkit-scrollbar{
        display: none;
    }
`;
export const Categoria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 950px;
    margin: auto;
    font-size: 30px;
    font-weight: bold;
    padding: 15px;
`;
export const Item = styled.div`   
    display: flex;
    flex-direction: column;
    width: 230px;
    border: 2.5px solid grey;           
    border-radius: 10px;  
    margin-right: 10px;
        
`;
export const Imagem = styled.img`
    height: 260px;
    width: 225px;  
    border-bottom: 2px solid grey;
    border-radius: 10px;  
`;
export const Info = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;   
`;
export const Nome = styled.span` 
    margin-top: 10px;
    max-width: 85%;
    font-family: sans-serif;
    align-items: center;
    font-weight: 500;    
`;
export const Preco = styled.span`
    font-weight: bold;   
`;
export const All= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    color: grey;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover{
        opacity: 0.7;
    }
`;
export const LeftArrow = styled.div`
    position: absolute;
    width: 35px;
    height: 35px;
    border: 1.6px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -45px;
    border-radius: 50%;
    opacity: ${(props) => props.disabled ? 0.3 : 1};
    
    &:hover{
        opacity: ${(props) => props.disabled ? 0.4 : 0.7};
    }
`;
export const RightArrow = styled.div`
    position: absolute;
    transform: rotate(180deg);
    width: 35px;
    height: 35px;
    border: 1.6px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 958px;
    border-radius: 50%;    
    opacity: ${(props) => props.disabled ? 0.3 : 1};
    
    &:hover{
        opacity: ${(props) => props.disabled ? 0.4 : 0.7};
    }
`;