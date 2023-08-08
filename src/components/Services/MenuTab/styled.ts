import styled, { css } from "styled-components";

export const TabSC = styled.div<{ $isActive: boolean }>`
    display: flex;
    padding: 24px 32px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    cursor: pointer;
    font-size: 24px;
    letter-spacing: -1px;
    font-weight: 500;
    transition: all 0.3s;

    &:hover {
        background-color: #000;
        color: #fff;
    }

    ${({ $isActive }) =>
        $isActive &&
        css`
            background-color: #000;
            color: #fff;
        `}
`;
