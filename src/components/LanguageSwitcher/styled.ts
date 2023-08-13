import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";
import { devices } from "src/styles/media";

export const LanguageSwitcherSC = styled.div`
    display: flex;
    position: relative;
    @media ${devices.lg} {
        order: 1;
    }
`;

export const IconWrapperSC = styled.div<{ small?: boolean }>`
    display: flex;
    width: ${({ small }) => (small ? "24px" : "32px")};
    height: ${({ small }) => (small ? "16px" : "24px")};
    box-shadow: 0 0 8px 0 rgba(41, 47, 61, 0.16);
`;

export const SwitcherValueSC = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 24px;
    cursor: pointer;
`;

export const OptionWrapperSC = styled.ul`
    position: absolute;
    padding: 4px 8px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 4px 56px 0 rgba(41, 47, 61, 0.16);
    top: calc(100% + 5px);
    z-index: 1;
    right: calc(100% - 30px);

    @media ${devices.lg} {
        right: auto;
        left: 0;
    }
`;

export const OptionItemSC = styled.li`
    white-space: nowrap;
    padding: 8px;

    a {
        color: #000;
    }
`;

export const LinkSC = styled(Link)`
    display: flex;
    align-items: center;
    gap: 4px;
`;
