import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LayoutBgSC } from "./styled";

const LayoutBg: React.FC = () => {
    return (
        <LayoutBgSC>
            <StaticImage
                src="../../images/main-bg.webp"
                alt=""
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                placeholder="blurred"
            />
            <StaticImage
                src="../../images/vector-bg-1.png"
                alt=""
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                placeholder="blurred"
            />
            <StaticImage
                src="../../images/vector-bg-2.png"
                alt=""
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                placeholder="none"
            />
        </LayoutBgSC>
    );
};

export default LayoutBg;
