import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "./components/Navigation";
import { HeaderSC, LogoLinkSC } from "./styled";
import { Logo } from "components/icons/Logo";

type Props = {
    isSticky: boolean;
};

export const Header: React.FC<Props> = ({ isSticky }) => {
    return (
        <HeaderSC isSticky={isSticky}>
            <LogoLinkSC to="/">
                <Logo color="#000" />
            </LogoLinkSC>
            <Navigation />
            <div>
                <StaticImage
                    src="../../../static/images/flags/UA.svg"
                    alt="Ukraine"
                />
            </div>
        </HeaderSC>
    );
};
