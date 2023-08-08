import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    graphql,
}) => {
    const { createPage } = actions;

    const { data: allNews } = await graphql(`
        query AllNews {
            allContentfulNews {
                nodes {
                    contentful_id
                }
            }
        }
    `);
    const { data: allServices } = await graphql(`
        query AllServices {
            allContentfulServices {
                nodes {
                    contentful_id
                }
            }
        }
    `);

    const NewsItemPage = path.resolve("./src/templates/news-item.tsx");

    const ServiceItemPage = path.resolve("./src/templates/service-item.tsx");
    allNews.allContentfulNews.nodes.forEach((news) => {
        createPage({
            path: "/news/" + news.contentful_id,
            component: NewsItemPage,
            context: { id: news.contentful_id },
        });
    });
    allServices.allContentfulServices.nodes.forEach((service) => {
        createPage({
            path: "/service/" + service.contentful_id,
            component: ServiceItemPage,
            context: { id: service.contentful_id },
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
