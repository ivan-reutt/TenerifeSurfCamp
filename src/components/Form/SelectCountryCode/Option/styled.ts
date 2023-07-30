import styled from "styled-components";

export const IconWrapperSmallSC = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
`;

export const OptionSC = styled.div`
    display: flex;
    padding: 12px 8px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #edeff4;
    }
`;

export const OptionTextSC = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    letter-spacing: -0.2px;
    line-height: 1.2;
`;

export const OptionTextGreySC = styled(OptionTextSC)`
    opacity: 0.64;
`;
