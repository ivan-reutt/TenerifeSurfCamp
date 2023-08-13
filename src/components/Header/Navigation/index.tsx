import React, { useCallback, useEffect, useState, useRef } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import {
    MenuItemLinkSC,
    NavWrapperSC,
    BurgerWrapperSC,
    CloseBtnSC,
} from "./styled";
import Menu from "src/icons/menu.svg";
import CloseCircle from "src/icons/close-circle.svg";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = (event: any) => {
        event.stopPropagation();
        setIsOpen(true);
        document.body.classList.add("modal-open");
    };

    const handleClose = () => {
        setIsOpen(false);
        document.body.classList.remove("modal-open");
    };
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                isOpen &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        },
        [isOpen],
    );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside]);
    return (
        <>
            <NavWrapperSC $isOpen={isOpen} ref={ref}>
                <MenuItemLinkSC to="/#about" onClick={handleClose}>
                    <Trans i18nKey={"nav-about"}>О нас</Trans>
                </MenuItemLinkSC>
                <MenuItemLinkSC to="/#entertainment" onClick={handleClose}>
                    <Trans i18nKey={"nav-rest"}>Развлечения</Trans>
                </MenuItemLinkSC>
                <MenuItemLinkSC to="/#vibe" onClick={handleClose}>
                    <Trans i18nKey={"nav-vibe"}>Вайб</Trans>
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
