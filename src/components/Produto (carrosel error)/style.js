import styled from "styled-components";

export const Container = styled.div`    
    width: 955px;
    margin: auto;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    align-items: center; 

    &::-webkit-scrollbar{
        display: none;
    }
`;
export const Header = styled.div`
    height: 60px;
    margin-bottom: 13px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 950px;
    margin: auto;
    margin-bottom: 10px;
`;
export const Categoria = styled.p`
    font-size: 30px;
    font-weight: bold;
`;
export const Item = styled.div`
    box-sizing: border-box;
    border: 2.5px solid grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: 350px;
    border-radius: 10px;
    margin-right: 10px;
`;
export const Imagem = styled.img`
    width: 225px;
    border-radius: 10px;
    height: 270px;
    border-bottom: 2.5px solid grey; 
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    border: 1px solid red;
    height: 250px;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;
`;
export const Titulo = styled.p`
    margin: auto;
    padding: 10px;
    display: flex;    
    flex-wrap: wrap;
    color: black;
`;
export const Preco = styled.div`
    margin: auto;
    padding: 10px;
     
    font-weight: bold; 
`;
export const Arrow = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid green;


    
`;
export const ArrowLeft = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;           
    border: 1px solid grey;
    border-radius: 50%;
    margin-left: -45px;
    cursor: pointer;
`;
export const ArrowRight = styled.div`
    transform: rotate(180deg);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 35px;
    height: 35px;        
    border: 1px solid grey; 
    border-radius: 50%;
    margin-left: 957px;
    cursor: pointer;
`;
export const VerTudo = styled.div`
    width: 950px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    p{
        color: black;
        text-decoration: underline;
    }
    p:hover{
        opacity: 0.7;
    }


`;

