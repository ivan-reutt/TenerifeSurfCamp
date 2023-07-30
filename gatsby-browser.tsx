import React from "react";
import "normalize-css";
import "./src/styles/fonts.css";
import { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/Layout/index";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
    element,
}) => {
    return <Layout>{element}</Layout>;
};
// export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = () => {
// };
