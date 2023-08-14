import styled from "styled-components";
import { ColorTypes } from ".";
import { buttonProps, bigBtn } from "src/layouts/common";
import { Link } from "gatsby";

export const ActionLinkSC = styled(Link)<{ $colorType: ColorTypes }>`
    ${buttonProps};
    ${bigBtn};
    background-color: ${({ $colorType }) =>
        $colorType === ColorTypes.GREEN ? "#9DFBBA" : "#fff"};
    color: #000;
    border-color: rgba(0, 0, 0, 0.05);
    }
`;
