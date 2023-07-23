import React from "react";
import { MenuItemSC, NavWrapperSC } from "./styled";

export const Navigation = () => {
    return (
        <NavWrapperSC>
            <MenuItemSC href="#about">О нас</MenuItemSC>
            <MenuItemSC href="#entertainment">Развлечения</MenuItemSC>
            <MenuItemSC href="#vibe">Вайб</MenuItemSC>
            <MenuItemSC href="/news">Новости</MenuItemSC>
        </NavWrapperSC>
    );
};
