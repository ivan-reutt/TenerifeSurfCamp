import { devices } from "src/styles/media";
import styled from "styled-components";

export const ServicesSC = styled.section`
    max-width: 100%;
`;

export const MenuSC = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media ${devices.sm} {
        gap: 30px;
    }
`;

export const TabsWrapperSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media ${devices.sm} {
        overflow-x: scroll;
        gap: 0;
        padding-bottom: 6px;
    }
`;
