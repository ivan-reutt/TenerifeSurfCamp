import styled, { css } from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { devices } from "src/styles/media";
import { LanguageSwitcherSC } from "components/LanguageSwitcher/styled";
import { BurgerWrapperSC } from "./Navigation/styled";

export const LogoLinkSC = styled(Link)`
    max-width: 115px;
    width: 100%;
    @media ${devices.lg} {
        order: 2;
    }
`;

export const HeaderSC = styled.header<{ $isSticky: boolean }>`
    position: sticky;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0 auto;
    border-radius: 0px 0px 24px 24px;
    padding: ${({ $isSticky }) => ($isSticky ? "28px 72px" : "38px 42px")};
    max-width: ${({ $isSticky }) => ($isSticky ? "1240px" : "1180px")};
    width: 100%;
    transition: all 0.3s;
    z-index: 1000;
    ${({ $isSticky }) =>
        $isSticky &&
        css`
            background-color: #fff;
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.02);
        `};

    @media ${devices.sm} {
        ${({ $isSticky }) =>
            $isSticky &&
            css`
                background-color: transparent;
                ${LogoLinkSC} {
                    position: fixed;
                    max-width: 178px;
                    padding: 16px 32px;
                    background-color: #fff;
                    border-radius: 40px;
                    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.02);
                    top: 24px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                ${BurgerWrapperSC} {
                    position: fixed;
                    right: 20px;
                    bottom: 20px;
                    background-color: #fff;
                    border-radius: 50%;
                    padding: 16px;
                    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.05);
                }

                ${LanguageSwitcherSC} {
                    display: none;
                }
            `};
    }
`;
