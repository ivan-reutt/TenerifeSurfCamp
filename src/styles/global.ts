import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { typography } from "./typography";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${typography};
    body {
      background: #FAF8F4;
      font-family: "GothamPro", sans-serif;
      &.modal-open {
        overflow: hidden;
      }
    }
    html {
      scroll-behavior: smooth;
    }
`;
