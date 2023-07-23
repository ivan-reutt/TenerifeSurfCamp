import styled from "styled-components";

export const SelectSC = styled.div`
    display: flex;
    position: relative;
`;

export const IconWrapperSC = styled.div`
    display: flex;
    width: 32px;
    height: 24px;
`;

export const SelectValueSC = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    cursor: pointer;
`;

export const OptionWrapperSC = styled.div`
    position: absolute;
    width: 320px;
    max-height: 230px;
    overflow-x: hidden;
    padding: 0 4px 0 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0px 4px 56px 0px rgba(41, 47, 61, 0.16);
    top: calc(100% + 25px);
    z-index: 1;
`;

export const PhoneCodeSC = styled.span`
    width: 60px;
`;
