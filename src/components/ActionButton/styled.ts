import styled from "styled-components";
import { ColorTypes } from ".";

export const ButtonSC = styled.a<{ $colorType: ColorTypes }>`
    padding: 24px 32px;
    background-color: ${({ $colorType }) =>
        $colorType === ColorTypes.GREEN ? "#9DFBBA" : "#fff"};
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 40px;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -1px;
    white-space: nowrap;
    transition: color 0.3s, background 0.3s;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`;
