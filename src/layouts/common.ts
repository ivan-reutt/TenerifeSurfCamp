import { devices } from "src/styles/media";
import styled, { css } from "styled-components";

export const SectionTitleSC = styled.h2`
    padding: 120px 100px;
    text-align: center;

    @media ${devices.lg} {
        padding: 80px;
    }

    @media ${devices.sm} {
        padding: 40px 20px;
    }
`;

export const scrollStyles = css`
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        overflow: hidden;
    }
    &::-webkit-scrollbar-track {
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.025);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.5);
    }
`;

export const buttonProps = css`
    border: 1px solid;
    border-radius: 40px;
    font-weight: 500;
    white-space: nowrap;
    align-self: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

export const bigBtn = css`
    padding: 24px 32px;
    font-size: 24px;
    letter-spacing: -1px;
`;

export const smallBtn = css`
    font-size: 16px;
    letter-spacing: -0.64px;
    line-height: 22px;
`;

export const MoreButtonSC = styled.button`
    ${buttonProps};
    ${bigBtn};
    border-color: #000;
    align-self: center;
`;

export const tooltipStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.02);
    cursor: pointer;

    @media ${devices.md} {
        display: none;
    }
`;
