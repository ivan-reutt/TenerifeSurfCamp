import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LayoutBgSC } from "./styled";

const LayoutBg: React.FC = () => {
    return (
        <LayoutBgSC>
            <StaticImage
                src="../../images/vector-bg-1.png"
                alt=""
                layout="fullWidth"
            />
            <StaticImage
                src="../../images/vector-bg-2.png"
                alt=""
                layout="fullWidth"
            />
        </LayoutBgSC>
    );
};

export default LayoutBg;
