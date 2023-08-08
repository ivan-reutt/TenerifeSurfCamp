import { Link } from "gatsby-plugin-react-i18next";
import styled, { css } from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavWrapperSC = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`;

const menuItemStyles = css`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    width: 120px;
    letter-spacing: -0.32px;
    text-align: center;
    cursor: pointer;
    color: #000;
`;
export const MenuItemBtnSC = styled(AnchorLink)`
    ${menuItemStyles}
`;

export const MenuItemLinkSC = styled(Link)`
    ${menuItemStyles}
`;
