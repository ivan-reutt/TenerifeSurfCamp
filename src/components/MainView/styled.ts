import { devices } from "src/styles/media";
import styled from "styled-components";

export const MainSectionSC = styled.section`
    position: relative;
    max-width: 100%;
    text-align: center;
    height: 100vh;
    padding-top: 180px;
    align-items: center;

    @media ${devices.xl} {
        height: auto;
    }

    @media ${devices.lg} {
        padding-top: 160px;
    }

    @media ${devices.sm} {
        padding-top: 140px;
    }
`;

export const WrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    padding: 80px 0;
    max-width: 100%;
    @media ${devices.lg} {
        padding: 40px 0;
    }
    @media ${devices.sm} {
        padding: 40px 0 0;
    }
`;

export const TitleSC = styled.h1`
    text-align: center;
    max-width: 100%;
    color: #000;

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

export const PriceWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PriceSC = styled.h3``;
