import styled from "styled-components";

export const FormSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
`;

export const InputWrapperSC = styled.div`
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
`;

export const SubmitTextSC = styled.div`
    font-size: 32px;
    color: #fff;
`;
