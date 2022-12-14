import styled from "styled-components";

export const Navbar = styled.div`    
    margin: 0;
    border-bottom: 5px solid black;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    background-color: white;

    img:hover {
        opacity: 0.5;
    }
`;
export const Menu = styled.img`
    width: 50px;
    object-fit: contain;
    margin-left: 10px;
`;
export const Logo = styled.img`
    box-sizing: border-box;
    height: 90%;
    padding: 5px;

`;
export const Sacola = styled.img`
    box-sizing: border-box;
    padding: 10px;
`;