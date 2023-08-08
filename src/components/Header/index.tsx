import React from "react";
import { Navigation } from "./Navigation";
import { HeaderSC, LogoLinkSC } from "./styled";
import { Logo } from "components/icons/Logo";
import LanguageSwitcher from "components/LanguageSwitcher";

interface IProps {
    isSticky: boolean;
}

export const Header: React.FC<IProps> = ({ isSticky }) => {
    return (
        <HeaderSC $isSticky={isSticky}>
            <LogoLinkSC to="/">
                <Logo color="#000" />
            </LogoLinkSC>
            <Navigation />
            <LanguageSwitcher />
        </HeaderSC>
    );
};
