import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import {
    SliderWrapperSC,
    SlideWrapperSC,
    SliderWrapSC,
    CloseSC,
} from "./styled";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { SectionTitleSC } from "src/layouts/common";
import { Trans } from "gatsby-plugin-react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import { SliderArrow } from "components/SliderArrow";

const PhotoGallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [indexPhoto, setIndexPhoto] = useState(0);
    const { contentfulPhotoGallery } = useStaticQuery(graphql`
        query PhotoGallery {
            contentfulPhotoGallery {
                smallPhotos: photo {
                    gatsbyImageData(
                        aspectRatio: 1.2
                        cropFocus: CENTER
                        resizingBehavior: THUMB
                    )
                }
                largePhotos: photo {
                    gatsbyImageData(layout: CONSTRAINED, height: 720)
                }
            }
        }
    `);

    const bigPhotoSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SliderArrow />,
        nextArrow: <SliderArrow alignLeft />,
        initialSlide: indexPhoto,
        adaptiveHeight: true,
    };

    const gallerySettings = {
        infinite: true,
        slidesToScroll: 2,
        swipeToSlide: true,
        slidesToShow: 3,
        speed: 300,
        rows: 2,
        dots: true,
        prevArrow: <SliderArrow />,
        nextArrow: <SliderArrow alignLeft />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    rows: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleClick = (index: number) => {
        setIndexPhoto(index);
        setIsOpen(true);
        document.body.classList.add("modal-open");
    };

    const handleClose = () => {
        setIsOpen(false);
        document.body.classList.remove("modal-open");
    };
    return (
        <section id="photoGallery">
            <SectionTitleSC>
                <Trans i18nKey={"aboutTitle"}>
                    Классные люди собираются вместе
                </Trans>
            </SectionTitleSC>
            <SliderWrapperSC>
                <Slider {...gallerySettings}>
                    {contentfulPhotoGallery.smallPhotos.map((slide, index) => (
                        <SlideWrapperSC
                            onClick={() => handleClick(index)}
                            key={index}
                        >
                            <GatsbyImage
                                image={getImage(slide) as IGatsbyImageData}
                                alt={"Our Photos"}
                                backgroundColor="transparent"
                            />
                        </SlideWrapperSC>
                    ))}
                </Slider>
                {isOpen && (
                    <SliderWrapSC>
                        <Slider {...bigPhotoSettings}>
                            {contentfulPhotoGallery.largePhotos.map(
                                (slide, index) => (
                                    <GatsbyImage
                                        key={index}
                                        image={
                                            getImage(slide) as IGatsbyImageData
                                        }
                                        alt={"Our Photos"}
                                        backgroundColor="transparent"
                                        objectFit="contain"
                                    />
                                ),
                            )}
                        </Slider>
                        <CloseSC onClick={handleClose} />
                    </SliderWrapSC>
                )}
            </SliderWrapperSC>
        </section>
    );
};

export default PhotoGallery;
