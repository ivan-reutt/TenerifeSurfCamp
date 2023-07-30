import React, { useCallback } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Button } from "components/Button";
import { NewsSC, SubTitleSC, NewsWrapperSC } from "src/layouts/news";
import NewsCard from "components/NewsCard";

const News: React.FC<PageProps<Queries.AllNewsPageQuery>> = ({ data }) => {
    const [isShowAll, setIsShowAll] = React.useState<boolean>(false);
    const newsList = isShowAll
        ? data.allContentfulNews.nodes
        : data.allContentfulNews.nodes.slice(0, 9);

    const handleCLickMore = useCallback(() => {
        setIsShowAll(true);
    }, []);

    return (
        <NewsSC>
            <SubTitleSC>Новости серфлагеря</SubTitleSC>
            <NewsWrapperSC>
                {newsList.map(({ preview, date, title, contentful_id }) => (
                    <NewsCard
                        key={contentful_id}
                        preview={preview}
                        date={date}
                        title={title}
                        contentful_id={contentful_id}
                    />
                ))}
            </NewsWrapperSC>
            {data.allContentfulNews.nodes.length > 8 && !isShowAll && (
                <Button onClick={handleCLickMore}>Показать больше</Button>
            )}
        </NewsSC>
    );
};

export default News;

export const Head: HeadFC = () => <title>FunVibe News</title>;

export const pageQuery = graphql`
    query AllNewsPage {
        allContentfulNews {
            nodes {
                date(formatString: "MMMM DD,YYYY")
                contentful_id
                title
                content {
                    raw
                }
                preview {
                    gatsbyImageData
                }
            }
        }
    }
`;
