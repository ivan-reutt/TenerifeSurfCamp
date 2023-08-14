import { devices } from "src/styles/media";
import styled from "styled-components";

export const MainSectionSC = styled.section`
    position: relative;
    max-width: 100%;
    text-align: center;
`;

export const WrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 80px 0;
    max-width: 100%;
    @media ${devices.lg} {
        padding: 40px 0 60px;
    }
    @media ${devices.sm} {
        padding: 40px 0;
        gap: 20px;
    }
`;

export const TitleSC = styled.h1`
    text-align: center;
    max-width: 100%;

    @media ${devices.sm} {
        margin-bottom: 20px;
    }
`;

export const BtnInTitleWrapperSC = styled.span`
    @media ${devices.sm} {
        display: none;
    }
`;

export const BtnWrapperSC = styled.span`
    display: none;
    @media ${devices.sm} {
        display: block;
    }
`;
