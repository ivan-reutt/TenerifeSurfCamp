import React from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { GlobalStyle } from "src/styles/global";
import { MainSC } from "./styled";

type Props = {
    children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <MainSC>{children}</MainSC>
            <Footer />
        </>
    );
};

export default Layout;
