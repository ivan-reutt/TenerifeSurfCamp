import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Options } from "@contentful/rich-text-react-renderer";
import {
    GatsbyImage,
    getImage,
    IGatsbyImageData,
    ImageDataLike,
} from "gatsby-plugin-image";
import {
    NewsItemSC,
    TitleSC,
    MainPhotoSC,
    DescriptionWrapperSC,
    MainInfoSC,
} from "src/layouts/news-item";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "components/Layout";

const NewsItem = ({ data }: PageProps<Queries.NewsItemQuery>) => {
    const currentLocalize = data.locales.edges[0].node.language || "uk";
    const langCode =
        currentLocalize.charAt(0).toUpperCase() + currentLocalize.slice(1);
    const options: Options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { gatsbyImageData, description } = node.data.target;
                return (
                    <GatsbyImage
                        image={getImage(gatsbyImageData) as IGatsbyImageData}
                        alt={description}
                    />
                );
            },
        },
    };
    const titleField = `title${langCode}`;
    const contentField = `content${langCode}`;

    const richText = renderRichText(
        data?.contentfulNews?.[contentField],
        options,
    );
    const image = getImage(
        data?.contentfulNews?.preview as ImageDataLike,
    ) as IGatsbyImageData;

    return (
        <Layout>
            <NewsItemSC>
                <TitleSC>{data.contentfulNews?.[titleField]}</TitleSC>
                <MainPhotoSC>
                    <GatsbyImage image={image} alt={"News Photo"} />
                </MainPhotoSC>
                <DescriptionWrapperSC>
                    <MainInfoSC>{richText}</MainInfoSC>
                </DescriptionWrapperSC>
            </NewsItemSC>
        </Layout>
    );
};
export default NewsItem;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;

export const query = graphql`
    query NewsItem($id: String, $language: String!) {
        contentfulNews(contentful_id: { eq: $id }) {
            date
            titleEn
            titleUk
            titleRu
            contentful_id
            contentRu {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        gatsbyImageData
                        __typename
                    }
                }
            }
            contentUk {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        gatsbyImageData
                        __typename
                    }
                }
            }
            contentEn {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        gatsbyImageData
                        __typename
                    }
                }
            }
            preview {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
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
