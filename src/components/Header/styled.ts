import styled, { css } from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { devices } from "src/styles/media";
import { LanguageSwitcherSC } from "components/LanguageSwitcher/styled";
import { BurgerWrapperSC } from "./Navigation/styled";

export const LogoLinkSC = styled(Link)`
    max-width: 115px;
    max-height: 24px;
    width: 100%;
    @media ${devices.lg} {
        order: 1;
    }
`;

export const HeaderSC = styled.header<{ $isFixed: boolean }>`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 24px 24px;
    padding: ${({ $isFixed }) => ($isFixed ? "28px 72px" : "38px 42px")};
    max-width: ${({ $isFixed }) => ($isFixed ? "1240px" : "1180px")};
    width: 100%;
    transition: all 0.3s;
    z-index: 1000;
    ${({ $isFixed }) =>
        $isFixed &&
        css`
            background-color: #fff;
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.02);
        `};

    @media ${devices.sm} {
        ${({ $isFixed }) =>
            $isFixed &&
            css`
                background-color: transparent;
                ${LogoLinkSC} {
                    position: fixed;
                    max-width: 178px;
                    padding: 16px 32px;
                    max-height: none;
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
                    top: calc(100vh - 80px);
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
