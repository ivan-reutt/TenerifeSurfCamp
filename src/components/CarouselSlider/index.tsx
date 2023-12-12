import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { SliderWrapperSC } from "./styled";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { SliderArrow } from "components/SliderArrow";

interface ISlideProps {
    slides?:
        | readonly ({
              readonly gatsbyImageData: IGatsbyImageData | null;
          } | null)[]
        | null;
}

const CarouselSlider: React.FC<ISlideProps> = ({ slides }) => {
    const mainSliderRef = useRef<Slider | null>(null);
    const navSliderRef = useRef<Slider | null>(null);

    const slidesInNav = slides && slides.length < 5 ? slides.length : 5;

    const settings: Settings = {
        arrows: true,
        className: "main-slider",
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SliderArrow />,
        nextArrow: <SliderArrow alignLeft />,
    };

    const navSettings: Settings = {
        asNavFor: mainSliderRef.current || undefined,
        slidesToShow: slidesInNav,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        className: "nav-slider",
        arrows: false,
    };
    return (
        <SliderWrapperSC>
            <Slider
                {...settings}
                asNavFor={navSliderRef.current || undefined}
                ref={mainSliderRef}
            >
                {slides?.map((slide, index) => (
                    <GatsbyImage
                        key={index}
                        image={getImage(slide) as IGatsbyImageData}
                        alt={"News Photo"}
                        backgroundColor="transparent"
                        objectFit="contain"
                    />
                ))}
            </Slider>
            <Slider {...navSettings} ref={navSliderRef}>
                {slides?.map((slide, index) => (
                    <GatsbyImage
                        key={index}
                        image={getImage(slide) as IGatsbyImageData}
                        alt={"News Photo"}
                        backgroundColor="transparent"
                    />
                ))}
            </Slider>
        </SliderWrapperSC>
    );
};

export default CarouselSlider;
