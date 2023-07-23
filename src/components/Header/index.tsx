import React from "react";
import { Navigation } from "./components/Navigation";
import { HeaderSC, LogoLinkSC } from "./styled";

type Props = {
    isSticky: boolean;
};

export const Header: React.FC<Props> = ({ isSticky }) => {
    return (
        <HeaderSC isSticky={isSticky}>
            <LogoLinkSC href="/">
                <img src="/images/logo-black.svg" alt="Logo" />
            </LogoLinkSC>
            <Navigation />
            <div>
                <img src="/images/UA.svg" alt="Ukraine" />
            </div>
        </HeaderSC>
    );
};
