import { devices } from "src/styles/media";
import styled from "styled-components";
import { TooltipSC } from "src/layouts/common";

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

export const IconSC = styled.span`
    width: 24px;
    height: 24px;
`;

export const HotSaleTooltipSC = styled(TooltipSC)`
    position: absolute;
    top: -60px;
`;
