import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    NewsItemSC,
    TitleSC,
    MainPhotoSC,
    DescriptionWrapperSC,
    MainInfoSC,
    AddInfoSC,
    DescriptionSC,
    HeadingSC,
    CardPhotoSC,
} from "src/layouts/news-item";

const NewsItem = ({ data }: PageProps<Queries.NewsItemQuery>) => {
    console.log(
        documentToReactComponents(JSON.parse(data.contentfulNews?.content.raw)),
    );
    const image = getImage(data.contentfulNews?.preview);
    return (
        <NewsItemSC>
            <TitleSC>{data.contentfulNews?.title}</TitleSC>
            <MainPhotoSC>
                <GatsbyImage image={image} alt={title} />
            </MainPhotoSC>
            <DescriptionWrapperSC>
                <MainInfoSC>
                    {/* {articleData.main.desc.map((item) => (
                        <DescriptionSC>{item}</DescriptionSC>
                    ))} */}
                    {documentToReactComponents(
                        JSON.parse(data.contentfulNews?.content.raw),
                    )}
                </MainInfoSC>
                {/* {articleData.more.map((item) => (
                    <>
                        <AddInfoSC>
                            <HeadingSC>{item.title}</HeadingSC>
                            {item.desc.map((descItem) => (
                                <DescriptionSC>{descItem}</DescriptionSC>
                            ))}
                            <CardPhotoSC>
                                <img src={item.photoPath} />
                            </CardPhotoSC>
                        </AddInfoSC>
                    </>
                ))} */}
            </DescriptionWrapperSC>
        </NewsItemSC>
    );
};
export default NewsItem;

export const Head: HeadFC = () => <title>FunVibe Surf</title>;

export const query = graphql`
    query NewsItem($id: String) {
        contentfulNews(contentful_id: { eq: $id }) {
            date
            title
            contentful_id
            content {
                raw
            }
            preview {
                url
                file {
                    url
                }
            }
        }
    }
`;
