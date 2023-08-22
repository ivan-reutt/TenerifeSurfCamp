import styled from "styled-components";
import { tooltipStyles } from "src/layouts/common";
import { Link } from "gatsby-plugin-react-i18next";

export const IconSC = styled.span`
    width: 24px;
    height: 24px;
`;

export const HotSaleTooltipSC = styled(Link)`
    ${tooltipStyles};
    color: inherit;
    position: absolute;
    top: 120px;
`;
