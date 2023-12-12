import { Link } from "gatsby-plugin-react-i18next";
import { devices } from "src/styles/media";
import styled, { css } from "styled-components";

export const NavWrapperSC = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media ${devices.lg} {
        display: none;
        ${({ $isOpen }) =>
            $isOpen &&
            css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                position: fixed;
                right: 0;
                top: 0;
                background-color: #fff;
                max-width: 350px;
                width: 100%;
                border-radius: 32px 0px 0px 32px;
                box-shadow: 0px 0px 100px 500px rgba(0, 0, 0, 0.5);
                padding: 120px 40px 40px 40px;
                height: 667px;
                gap: 60px;
                z-index: 1;
            `}
    }
`;

export const MenuItemLinkSC = styled(Link)`
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    width: 120px;
    letter-spacing: -0.32px;
    text-align: center;
    cursor: pointer;
    color: #000;

    @media ${devices.lg} {
        text-align: left;
    }
`;

export const BurgerWrapperSC = styled.div`
    display: none;

    @media ${devices.lg} {
        display: block;
    }
`;

export const CloseBtnSC = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #000;
    padding: 24px;
    align-self: center;
    margin-top: auto;
`;
