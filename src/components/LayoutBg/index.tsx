import React, { useEffect, useState } from "react";
import {
    StaticImage,
    GatsbyImage,
    getImage,
    IGatsbyImageData,
    ImageDataLike,
} from "gatsby-plugin-image";
import { LayoutBgSC, MainBgWrapperSC } from "./styled";
import Slider, { Settings } from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import { devices } from "src/styles/media";

const LayoutBg: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(!window.matchMedia(devices.lg).matches);
    }, []);

    const settings: Settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: false,
        touchMove: false,
        draggable: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        lazyLoad: "progressive",
    };
    const { contentfulBackgroundImages } = useStaticQuery(graphql`
        query BackgroundImages {
            contentfulBackgroundImages {
                backgroundImages {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        height: 1000
                        cropFocus: CENTER
                        resizingBehavior: FILL
                    )
                }
            }
        }
    `);
    return (
        <LayoutBgSC>
            <MainBgWrapperSC>
                {isDesktop && (
                    <Slider {...settings}>
                        {contentfulBackgroundImages.backgroundImages.map(
                            (slide: ImageDataLike, index: number) => (
                                <GatsbyImage
                                    key={index}
                                    image={getImage(slide) as IGatsbyImageData}
                                    loading="eager"
                                    alt=""
                                />
                            ),
                        )}
                    </Slider>
                )}
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
            <StaticImage
                src="../../images/vector-bg-1.png"
                alt=""
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
                placeholder="blurred"
            />
        </LayoutBgSC>
    );
};

export default LayoutBg;
