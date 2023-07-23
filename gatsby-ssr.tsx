import React from "react";
import { GlobalStyle } from "./src/styles/global";

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

export const wrapPageElement = ({ element }) => {
    return (
        <>
            <GlobalStyle />
            {element}
        </>
    );
};
