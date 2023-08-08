import React, { useCallback } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Button } from "components/Button";
import { NewsSC, SubTitleSC, NewsWrapperSC } from "src/layouts/news";
import NewsCard from "components/NewsCard";
import Layout from "components/Layout";
import { Trans } from "gatsby-plugin-react-i18next";

const News: React.FC<PageProps<Queries.AllNewsPageQuery>> = ({ data }) => {
    const currentLocalize = data.locales.edges[0].node.language || "uk";
    const langCode =
        currentLocalize.charAt(0).toUpperCase() + currentLocalize.slice(1);
    const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
    const newsList = isShowAll
        ? data.allContentfulNews.nodes
        : data.allContentfulNews.nodes.slice(0, 9);

    const handleClickMore = useCallback(() => {
        setIsShowAll(true);
    }, []);
    const titleField = `title${langCode}`;

    return (
        <Layout>
            <NewsSC>
                <SubTitleSC>
                    <Trans i18nKey="newsTitle">Новости серфлагеря</Trans>
                </SubTitleSC>
                <NewsWrapperSC>
                    {newsList.map((news) => (
                        <NewsCard
                            key={news.contentful_id}
                            preview={news.preview}
                            date={news.date}
                            title={news[titleField]}
                            contentful_id={news.contentful_id}
                        />
                    ))}
                </NewsWrapperSC>
                {data.allContentfulNews.nodes.length > 8 && !isShowAll && (
                    <Button onClick={handleClickMore}>
                        <Trans i18nKey="showMore">Показать больше</Trans>
                    </Button>
                )}
            </NewsSC>
        </Layout>
    );
};

export default News;

export const Head: HeadFC = () => <title>FunVibe News</title>;

export const pageQuery = graphql`
    query AllNewsPage($language: String!) {
        allContentfulNews {
            nodes {
                date(formatString: "MMMM DD,YYYY")
                contentful_id
                titleEn
                titleUk
                titleRu
                preview {
                    gatsbyImageData
                }
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
