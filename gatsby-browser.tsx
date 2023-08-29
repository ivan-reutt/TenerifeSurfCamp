import "normalize-css";
import "./src/styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { GatsbyBrowser } from "gatsby";
import ReactDOM from "react-dom/client";

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({
    routerProps: { location },
}) => {
    if (!location.href.includes("#") && !!location["action"]) {
        return [0, 0];
    }
    return true;
};

export const replaceHydrateFunction = () => {
    return (element, container) => {
        const root = ReactDOM.createRoot(container);
        root.render(element);
    };
};
