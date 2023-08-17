import React, { useCallback } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { NewsSC, SubTitleSC, NewsWrapperSC } from "src/layouts/news";
import NewsCard from "components/NewsCard";
import Layout from "components/Layout";
import { Trans } from "gatsby-plugin-react-i18next";
import { MoreButtonSC } from "src/layouts/common";
import { useCurrentLang } from "src/hooks/useCurrentLang";
import { SEO } from "components/Seo";

type TitleInt = "titleEn" | "titleRu" | "titleUk";

const News: React.FC<PageProps<Queries.AllNewsPageQuery>> = ({ data }) => {
    const [isShowAll, setIsShowAll] = React.useState<boolean>(false);

    const currentLang = useCurrentLang();

    const newsList = isShowAll
        ? data.allContentfulNews.nodes
        : data.allContentfulNews.nodes.slice(0, 9);

    const handleClickMore = useCallback(() => {
        setIsShowAll(true);
    }, []);
    const titleField = `title${currentLang}` as TitleInt;

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
                    <MoreButtonSC onClick={handleClickMore}>
                        <Trans i18nKey="showMore">Показать больше</Trans>
                    </MoreButtonSC>
                )}
            </NewsSC>
        </Layout>
    );
};

export default News;

export const Head: HeadFC = () => <SEO />;

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
