import React from "react";
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
    const isDesktop = !window.matchMedia(devices.lg).matches;
    const settings: Settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        swipe: false,
        touchMove: false,
        draggable: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    };
    const { contentfulBackgroundImages } = useStaticQuery(graphql`
        query BackgroundImages {
            contentfulBackgroundImages {
                backgroundImages {
                    gatsbyImageData(
                        quality: 100
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
        </LayoutBgSC>
    );
};

export default LayoutBg;
