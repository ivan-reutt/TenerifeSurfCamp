import styled, { css } from "styled-components";
import { devices } from "src/styles/media";

export const InfoBlockSC = styled.div`
    display: flex;
    gap: 20px;
    align-self: stretch;
    @media ${devices.sm} {
        flex-direction: column;
    }
`;

const infoItemStyles = css`
    padding: 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-radius: 32px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    flex-grow: 1;
    background-color: #fff;
    cursor: pointer;
    @media ${devices.sm} {
        padding: 40px 24px;
    }
`;

export const InfoItemSC = styled.div`
    ${infoItemStyles}
`;

export const WeatherItemWrapperSC = styled.a`
    ${infoItemStyles}
    flex-direction: column;
    color: inherit;
`;

export const InfoItemsWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
`;

export const ItemTextSC = styled.h4``;

export const IconSC = styled.div`
    width: 40px;
    height: 40px;
    @media ${devices.sm} {
        width: 24px;
        height: 24px;
    }
`;

export const WeatherItemSC = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const TemparatureSC = styled.h2``;
export const WeatherTextSC = styled.p`
    opacity: 0.56;
`;

const CelsiusSC = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;

    &::before {
        content: "o";
    }
`;

export const BigCelsiusSC = styled(CelsiusSC)`
    font-size: 32px;
    font-weight: 500;
    align-self: flex-start;
    &::before {
        font-size: 20px;
    }

    @media ${devices.sm} {
        font-size: 24px;
        align-self: center;
        &::before {
            font-size: 14px;
        }
    }
`;

export const SmallCelsiusSC = styled(CelsiusSC)`
    font-size: 24px;
    &::before {
        font-size: 12px;
    }
    @media ${devices.sm} {
        font-size: 16px;
        align-self: center;
        &::before {
            font-size: 10px;
        }
    }
`;
