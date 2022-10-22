import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 230px;
    border: 2.5px solid grey;           
    border-radius: 10px;  

    &:hover {
        opacity: 0.8;
    }
    

    img{
        height: 260px;
        width: 100%;  
        border-bottom: 2px solid grey;
        border-radius: 10px;
    }

    div{
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        span{
            margin-top: 10px;
            max-width: 85%;
            font-family: sans-serif;
            align-items: center;
            font-weight: bold;
        }
    }
`;