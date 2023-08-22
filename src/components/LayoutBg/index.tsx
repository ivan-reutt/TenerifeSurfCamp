import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LayoutBgSC, MainBgWrapperSC } from "./styled";

const LayoutBg: React.FC = () => {
    return (
        <LayoutBgSC>
            <MainBgWrapperSC>
                <StaticImage
                    src="../../images/IMG_2217.jpeg"
                    alt=""
                    formats={["auto", "webp", "avif"]}
                    placeholder="blurred"
                    style={{ height: "100%" }}
                />
            </MainBgWrapperSC>
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
