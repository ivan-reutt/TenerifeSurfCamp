import styled, { css } from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

export const HeaderSC = styled.header<{ $isSticky: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0 auto;
    border-radius: 0px 0px 24px 24px;
    padding: ${({ $isSticky }) => ($isSticky ? "38px 72px" : "38px 42px")};
    max-width: ${({ $isSticky }) => ($isSticky ? "1240px" : "1180px")};
    transition: all 0.3s;
    z-index: 1000;
    ${({ $isSticky }) =>
        $isSticky &&
        css`
            background-color: #fff;
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.02);
        `};
`;

export const LogoLinkSC = styled(Link)`
    max-width: 115px;
    width: 100%;
`;
