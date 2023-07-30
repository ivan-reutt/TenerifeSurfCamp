import React from "react";
import { MenuItemLinkSC, NavWrapperSC, MenuItemBtnSC } from "./styled";

export const Navigation = () => {
    return (
        <NavWrapperSC>
            <MenuItemBtnSC to="/#about">О нас</MenuItemBtnSC>
            <MenuItemBtnSC to="/#entertainment">Развлечения</MenuItemBtnSC>
            <MenuItemBtnSC to="/#vibe">Вайб</MenuItemBtnSC>
            <MenuItemLinkSC to="/news">Новости</MenuItemLinkSC>
        </NavWrapperSC>
    );
};
