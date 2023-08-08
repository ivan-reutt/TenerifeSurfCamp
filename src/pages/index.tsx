import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { InfoBlock } from "components/InfoBlock";
import { People } from "components/People";
import { Services } from "components/Services";
import { Vibe } from "components/Vibe";
import { MainHead } from "components/MainHead";
import Layout from "components/Layout";
import LayoutBg from "components/LayoutBg";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <LayoutBg />
            <MainHead />
            <InfoBlock />
            <People />
            <Services />
            <Vibe />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(
            filter: { ns: { in: ["index"] }, language: { eq: $language } }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
