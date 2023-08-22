import "normalize-css";
import "./src/styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { GatsbyBrowser } from "gatsby";

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({
    routerProps: { location },
}) => {
    if (!location.href.includes("#") && !!location["action"]) {
        return [0, 0];
    }
    return true;
};
