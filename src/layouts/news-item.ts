import { devices } from "src/styles/media";
import styled from "styled-components";

export const NewsItemSC = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    width: 100%;
    padding-top: 160px;

    @media ${devices.lg} {
        padding-top: 140px;
    }

    @media ${devices.sm} {
        padding-top: 120px;
    }
`;

export const TitleSC = styled.h2`
    max-width: 760px;
    text-align: center;
`;

export const DescriptionWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 760px;
`;

export const MainInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const AddInfoSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const MainPhotoSC = styled.div`
    align-self: stretch;
`;

export const HeadingSC = styled.h4``;

export const DescriptionSC = styled.p`
    line-height: 40px;
`;
