import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Services } from "components/Services";
import { Vibe } from "components/Vibe";
import { MainView } from "components/MainView";
import Layout from "components/Layout";
import LayoutBg from "components/LayoutBg";
import { SEO } from "components/Seo";
import { AboutUs } from "components/AboutUs";
import { Reviews } from "components/Reviews";
import { ActionForm } from "components/ActionForm";
import PhotoGallery from "components/PhotoGallery";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <LayoutBg />
            <MainView />
            <Services />
            <AboutUs />
            <Reviews />
            <ActionForm />
            <PhotoGallery />
            <Vibe />
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

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
