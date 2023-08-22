import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import {
    MenuItemLinkSC,
    NavWrapperSC,
    BurgerWrapperSC,
    CloseBtnSC,
} from "./styled";
import Menu from "src/icons/menu.svg";
import CloseCircle from "src/icons/close-circle.svg";
import { useModal } from "src/hooks/useModalProps";

export const Navigation: React.FC = () => {
    const { ref, isOpen, handleOpenMenu, handleClose } = useModal(true);
    return (
        <>
            <NavWrapperSC $isOpen={isOpen} ref={ref}>
                <MenuItemLinkSC to="/#entertainment" onClick={handleClose}>
                    <Trans i18nKey={"nav-rest"}>Развлечения</Trans>
                </MenuItemLinkSC>
                <MenuItemLinkSC to="/#vibe" onClick={handleClose}>
                    <Trans i18nKey={"nav-vibe"}>Вайб</Trans>
                </MenuItemLinkSC>
                <MenuItemLinkSC to="/#about" onClick={handleClose}>
                    <Trans i18nKey={"nav-about"}>О нас</Trans>
                </MenuItemLinkSC>
                <MenuItemLinkSC to="/news" onClick={handleClose}>
                    <Trans i18nKey={"nav-news"}>Новости</Trans>
                </MenuItemLinkSC>
                {isOpen && (
                    <CloseBtnSC onClick={handleClose}>
                        <CloseCircle />
                    </CloseBtnSC>
                )}
            </NavWrapperSC>
            <BurgerWrapperSC onClick={handleOpenMenu}>
                <Menu />
            </BurgerWrapperSC>
        </>
    );
};
