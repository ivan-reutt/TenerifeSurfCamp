import type { GatsbyConfig } from "gatsby";
import { config as doteenvConfig } from "dotenv";

doteenvConfig({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
    siteMetadata: {
        title: `tenereife_surf`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                duration: 50,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /icons/, // See below to configure properly
                },
            },
        },
    ],
};

export default config;