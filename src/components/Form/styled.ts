import { devices } from "src/styles/media";
import styled, { css } from "styled-components";

export const FormSC = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    max-width: 100%;
`;

export const InputWrapperSC = styled.div`
    position: relative;
    display: flex;
    gap: 5px;
    border-radius: 40px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 24px;
    background-color: #fff;
    line-height: 30px;
    letter-spacing: -1px;
    align-self: stretch;
`;

export const InputSC = styled.input`
    font-size: 24px;
    line-height: 1.5;
    width: 100%;

    @media ${devices.sm} {
        line-height: 1;
        font-size: 16px;
    }
`;

export const SubmitTextSC = styled.h4<{ $isOrder?: boolean }>`
    color: ${({ $isOrder }) => ($isOrder ? "#000" : "#fff")};
    ${({ $isOrder }) =>
        $isOrder &&
        css`
            padding: 30px 0;

            @media ${devices.sm} {
                padding: 0 0 30px;
            }
        `}
`;

export const AgreementTextSC = styled.p`
    font-size: 16px;
    opacity: 0.5;
    margin-top: 20px;
    text-align: center;
`;

export const ErrorMsgSC = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: red;
    position: absolute;
    top: calc(100% - 5px);
    left: 20px;
`;
