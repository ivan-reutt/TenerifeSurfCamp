import { GatsbyNode } from "gatsby";
import path from "path";
import fs from "fs";

interface TranslationData {
    contentfulAllTextContent: {
        translationRu: { internal: { content: string } };
        translationEn: { internal: { content: string } };
        translationUa: { internal: { content: string } };
    };
}

interface NewsData {
    allContentfulNews: {
        nodes: Array<{ contentful_id: string; link: string }>;
    };
}

interface ServicesData {
    allContentfulServices: {
        nodes: Array<{ contentful_id: string; link: string }>;
    };
}

export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    graphql,
}) => {
    const { createPage } = actions;

    const { data: allNews } = await graphql<NewsData>(`
        query AllNews {
            allContentfulNews {
                nodes {
                    contentful_id
                    link
                }
            }
        }
    `);
    const { data: allServices } = await graphql<ServicesData>(`
        query AllServices {
            allContentfulServices {
                nodes {
                    contentful_id
                    link
                }
            }
        }
    `);
    const { data: translations } = await graphql<TranslationData>(`
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

    if (translations?.contentfulAllTextContent) {
        fs.writeFileSync(
            outputPathRu,
            translations.contentfulAllTextContent.translationRu.internal
                .content,
        );

        fs.writeFileSync(
            outputPathEn,
            translations.contentfulAllTextContent.translationEn.internal
                .content,
        );

        fs.writeFileSync(
            outputPathUa,
            translations.contentfulAllTextContent.translationUa.internal
                .content,
        );
    }

    const NewsItemPage = path.resolve("./src/templates/news-item.tsx");

    const ServiceItemPage = path.resolve("./src/templates/service-item.tsx");
    allNews?.allContentfulNews.nodes.forEach((news) => {
        createPage({
            path: "/news/" + news.link,
            component: NewsItemPage,
            context: { id: news.contentful_id },
        });
    });
    allServices?.allContentfulServices.nodes.forEach((service) => {
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

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
    ({ actions }) => {
        const { createTypes } = actions;
        createTypes(`
        type ContentfulServicesDescriptionEn implements Node {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }
        type ContentfulServicesDescriptionRu implements Node {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }
        type ContentfulServicesDescriptionUk implements Node {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }
    `);
    };
