import styled from "styled-components";

export const Container = styled.div`
    min-height: 80vh;
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
    margin: 0 auto;
    gap: 20px;
    padding: 7vh 0;
`;
