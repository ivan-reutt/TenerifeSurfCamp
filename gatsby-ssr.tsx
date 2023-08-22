import React from "react";
import type { GatsbySSR } from "gatsby";

const fontsPath = "/fonts/";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
    setHeadComponents,
}) => {
    setHeadComponents([
        <link
            key="gothampro-woff"
            rel="preload"
            href={`${fontsPath}GothamPro.woff`}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />,
        <link
            key="gothampro-woff2"
            rel="preload"
            href={`${fontsPath}GothamPro.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="gothampro-medium-woff2"
            rel="preload"
            href={`${fontsPath}GothamPro-Medium.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="gothampro-medium-woff"
            rel="preload"
            href={`${fontsPath}GothamPro-Medium.woff`}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />,
        <link
            key="gothampro-bold-woff"
            rel="preload"
            href={`${fontsPath}GothamPro-Bold.woff`}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />,
        <link
            key="gothampro-bold-woff2"
            rel="preload"
            href={`${fontsPath}GothamPro-Bold.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
    ]);
};
