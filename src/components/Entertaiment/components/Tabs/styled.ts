import styled from "styled-components";

export const CatalogSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const TabsWrapperSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

export const CardsWrapperSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;
