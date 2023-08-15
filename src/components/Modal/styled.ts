import { devices } from "src/styles/media";
import styled, { css } from "styled-components";

export const OverlaySC = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 20px;

    body & {
        overflow: hidden;
    }
`;

export const ModalSC = styled.div<{ $withPadding?: boolean }>`
    position: relative;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    border-radius: 32px;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.02);

    ${({ $withPadding }) =>
        $withPadding &&
        css`
            padding: 80px 40px 40px 40px;
            background-color: #fff;

            @media ${devices.sm} {
                padding: 40px 20px 20px;
            }
        `}
`;

export const CloseSC = styled.div`
    position: absolute;
    display: flex;
    top: 24px;
    right: 24px;
    cursor: pointer;
    z-index: 1;
`;
