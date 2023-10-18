import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Серфкемп Тенерифе - полный курс серфинга в лагере на Канарских островах `,
        siteUrl: `https://funvibe.me/`,
        keywords:
            "Серфинг, Серф кемп, серфинг лагерь, серфкемп, Тенерифе, остров тенерифе, тенерифе канарские острова, де тенерифе, уроки серфинга, Серф, Канарские острова,купить экскурсию, лучшие экскурсии, обзорная экскурсия, сайт экскурсии, цены +на экскурсии, экскурсии",
        description:
            "Серфкемп на Канарских островах - Тенерифе! Где научиться серфингу в Европе? Обучаем и даем уроки серфинга в теплом океане зимой и летом. Серфкемп от 690 евро неделя.",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-netlify",
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locale`,
            },
        },
        {
            resolve: "gatsby-plugin-react-i18next",
            options: {
                languages: ["uk", "ru", "en"],
                defaultLanguage: "en",
                redirect: false,
                siteUrl: `https://www.yourdomain.tld`,
                i18nextOptions: {
                    // debug: true,
                    fallbackLng: "en",
                    supportedLngs: ["uk", "ru", "en"],
                    defaultNS: "common",
                    interpolation: {
                        escapeValue: false, // not needed for react as it escapes by default
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /icons/, // See below to configure properly
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `static/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "642630721362046",
            },
        },
    ],
};

export default config;
