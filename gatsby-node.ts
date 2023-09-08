import { GatsbyNode } from "gatsby";
import path from "path";
import fs from "fs";

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
                    link
                }
            }
        }
    `);
    const { data: allServices } = await graphql(`
        query AllServices {
            allContentfulServices {
                nodes {
                    contentful_id
                    link
                }
            }
        }
    `);
    const { data: translations } = await graphql(`
        query AllTranslations {
            contentfulAllTextContent {
                translationRu {
                    internal {
                        content
                    }
                }
                translationEn {
                    internal {
                        content
                    }
                }
                translationUa {
                    internal {
                        content
                    }
                }
            }
        }
    `);
    const outputPathRu = path.resolve("./locales/ru/index.json");
    const outputPathEn = path.resolve("./locales/en/index.json");
    const outputPathUa = path.resolve("./locales/uk/index.json");

    fs.writeFileSync(
        outputPathRu,
        translations.contentfulAllTextContent.translationRu.internal.content,
    );

    fs.writeFileSync(
        outputPathEn,
        translations.contentfulAllTextContent.translationEn.internal.content,
    );

    fs.writeFileSync(
        outputPathUa,
        translations.contentfulAllTextContent.translationUa.internal.content,
    );

    const NewsItemPage = path.resolve("./src/templates/news-item.tsx");

    const ServiceItemPage = path.resolve("./src/templates/service-item.tsx");
    allNews.allContentfulNews.nodes.forEach((news) => {
        createPage({
            path: "/news/" + news.link,
            component: NewsItemPage,
            context: { id: news.contentful_id },
        });
    });
    allServices.allContentfulServices.nodes.forEach((service) => {
        createPage({
            path: "/service/" + service.link,
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
