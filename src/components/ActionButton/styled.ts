import styled from "styled-components";
import { buttonProps, bigBtn, smallBtn } from "src/layouts/common";

export const ActionButtonSC = styled.button<{ $isSmall?: boolean }>`
    ${buttonProps};
    background-color: #9dfbba;
    color: #000;
    border-color: rgba(0, 0, 0, 0.05);
    ${({ $isSmall }) => ($isSmall ? smallBtn : bigBtn)};
`;
