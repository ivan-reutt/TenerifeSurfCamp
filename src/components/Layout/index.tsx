import React, { useEffect, useState } from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { GlobalStyle } from "src/styles/global";

type Props = {
    children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const [isStickyHeader, setIsStickyHeader] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            setIsStickyHeader(window.pageYOffset > 0 ? true : false);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);
    return (
        <>
            <GlobalStyle />
            <Header isSticky={isStickyHeader} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
