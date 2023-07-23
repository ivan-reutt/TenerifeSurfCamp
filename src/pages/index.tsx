import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { InfoBlock } from "../components/InfoBlock";
import { People } from "../components/People";
import { Entertaiment } from "../components/Entertaiment";
import { Vibe } from "../components/Vibe";
import { Footer } from "../components/Footer";
import { MainHead } from "../components/MainHead";
import { useEffect, useState } from "react";

const IndexPage: React.FC<PageProps> = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            setSticky(window.pageYOffset > 0 ? true : false);
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);
    return (
        <>
            <Header isSticky={sticky} />
            <Main>
                <MainHead />
                <InfoBlock />
                <People />
                <Entertaiment />
                <Vibe />
            </Main>
            <Footer />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;
