import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    createNodeId,
    createContentDigest,
    graphql,
}) => {
    const { createPage } = actions;

    const data = await graphql(`
        query AllNewsQuery {
            allContentfulNews {
                nodes {
                    date
                    title
                    contentful_id
                }
            }
        }
    `);

    const NewsItem = path.resolve("./src/templates/news-item.tsx");
    data.data.allContentfulNews.nodes.forEach((news) => {
        createPage({
            path: "/news/" + news.contentful_id,
            component: NewsItem,
            context: { id: news.contentful_id },
        });
    });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
    actions,
}) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
        resolve: {
            alias: {
                src: path.resolve(__dirname, "src"),
                components: path.resolve(__dirname, "src/components"),
            },
        },
    });
};
