import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { InfoBlock } from "components/InfoBlock";
import { People } from "components/People";
import { Entertaiment } from "components/Services";
import { Vibe } from "components/Vibe";
import { MainHead } from "components/MainHead";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <MainHead />
            <InfoBlock />
            <People />
            <Entertaiment />
            <Vibe />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;
