import { Trans } from "gatsby-plugin-react-i18next";
import React from "react";
import { MenuItemLinkSC, NavWrapperSC, MenuItemBtnSC } from "./styled";

export const Navigation: React.FC = () => {
    return (
        <NavWrapperSC>
            <MenuItemBtnSC to="/#about">
                <Trans i18nKey={"nav-about"}>О нас</Trans>
            </MenuItemBtnSC>
            <MenuItemBtnSC to="/#entertainment">
                <Trans i18nKey={"nav-rest"}>Развлечения</Trans>
            </MenuItemBtnSC>
            <MenuItemBtnSC to="/#vibe">
                {" "}
                <Trans i18nKey={"nav-vibe"}>Вайб</Trans>
            </MenuItemBtnSC>
            <MenuItemLinkSC to="/news">
                {" "}
                <Trans i18nKey={"nav-news"}>Новости</Trans>
            </MenuItemLinkSC>
        </NavWrapperSC>
    );
};
