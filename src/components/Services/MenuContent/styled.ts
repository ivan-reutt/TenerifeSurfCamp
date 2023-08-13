import { devices } from "src/styles/media";
import styled from "styled-components";

export const MenuContentSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const CardsWrapperSC = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media ${devices.sm} {
        grid-template-columns: 1fr;
    }
`;
