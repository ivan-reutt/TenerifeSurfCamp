import styled from "styled-components";
import { ColorTypes } from ".";
import { buttonProps, bigBtn } from "src/layouts/common";

export const ActionButtonSC = styled.a<{ $colorType: ColorTypes }>`
    ${buttonProps};
    ${bigBtn};
    background-color: ${({ $colorType }) =>
        $colorType === ColorTypes.GREEN ? "#9DFBBA" : "#fff"};
    color: #000;
    border-color: rgba(0, 0, 0, 0.05);
    }
`;
