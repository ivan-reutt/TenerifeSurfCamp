import React, { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { HeaderSC, LogoLinkSC } from "./styled";
import { Logo } from "components/icons/Logo";
import LanguageSwitcher from "components/LanguageSwitcher";

export const Header: React.FC = () => {
    const [isFixedHeader, setIsFixedHeader] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            setIsFixedHeader(window.pageYOffset > 0 ? true : false);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);
    return (
        <HeaderSC $isFixed={isFixedHeader}>
            <LogoLinkSC to="/" aria-label="logo">
                <Logo color="#000" />
            </LogoLinkSC>
            <Navigation />
            <LanguageSwitcher />
        </HeaderSC>
    );
};
