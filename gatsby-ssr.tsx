import { GatsbySSR } from "gatsby";
import React from "react";
import Layout from "./src/components/Layout/index";

const fontsPath = "/fonts/";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="GothamPro"
            rel="preload"
            href={`${fontsPath}GothamPro.woff`}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />,
        <link
            key="GothamPro"
            rel="preload"
            href={`${fontsPath}GothamPro.ttf`}
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
        />,
    ]);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
    return <Layout>{element}</Layout>;
};

// export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({
//     element,
// }) => {
//     return (
//         <>
//             <GlobalStyle />
//             {element}
//         </>
//     );
// };
