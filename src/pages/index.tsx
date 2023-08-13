import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { InfoBlock } from "components/InfoBlock";
import { About } from "components/About";
import { Services } from "components/Services";
import { Vibe } from "components/Vibe";
import { MainView } from "components/MainView";
import Layout from "components/Layout";
import LayoutBg from "components/LayoutBg";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <LayoutBg />
            <MainView />
            <InfoBlock />
            <About />
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
