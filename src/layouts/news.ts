import styled from "styled-components";
import { devices } from "src/styles/media";

export const NewsSC = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding-top: 160px;

    @media ${devices.lg} {
        padding-top: 140px;
    }

    @media ${devices.sm} {
        padding-top: 120px;
        gap: 40px;
    }
`;

export const SubTitleSC = styled.h2`
    align-self: flex-start;
`;

export const NewsWrapperSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    @media ${devices.lg} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.sm} {
        grid-template-columns: 1fr;
    }
`;

export const HeadingSC = styled.span`
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -1px;
    font-weight: 500;
`;
