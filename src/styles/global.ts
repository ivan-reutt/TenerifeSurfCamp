import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${typography};
    body {
      background: #FAF8F4;
      font-family: "GothamPro", sans-serif;
    }
    html {
      scroll-behavior: smooth;
    }
    /* * {
            scrollbar-width: thin;
            &::-webkit-scrollbar {
                width: 5px;
                height:5px;
                overflow: hidden;
            }
            &::-webkit-scrollbar-track {
                border-radius: 2px;
                background: rgba(0, 0, 0, 0.025);
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 2px;
                background: rgba(0, 0, 0, 0.5);
            }
        } */
`;
