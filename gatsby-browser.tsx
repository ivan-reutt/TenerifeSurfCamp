import React from "react";
import "./src/styles/fonts.css";
import "normalize-css";
import { GlobalStyle } from "./src/styles/global";

export const wrapPageElement = ({ element }) => {
    return (
        <>
            <GlobalStyle />
            {element}
        </>
    );
};
