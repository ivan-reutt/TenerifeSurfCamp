import React, { useState } from "react";
import { VibeSC, VideoSliderSC, PlaySC, SlideWrapperSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { SectionTitleSC } from "src/layouts/common";
import Slider, { Settings } from "react-slick";
import ReactPlayer from "react-player/lazy";
import Videoplay from "src/icons/videoplay.svg";
import { useStaticQuery, graphql } from "gatsby";

export const Vibe = () => {
    const [playingVideoIndex, setPlayingVideoIndex] = useState<number>();
    const [isPlaying, setIsPlaying] = useState<boolean>();
    const { contentfulListOfVideoForSlider } = useStaticQuery(graphql`
        query VideoForSlider {
            contentfulListOfVideoForSlider {
                videoList
            }
        }
    `);
    const settings: Settings = {
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    const handleVideoClick = (e: React.MouseEvent<HTMLElement>) => {
        const slideIndex = Number(
            (e.target as HTMLElement).parentElement?.classList.value,
        );
        setPlaying(slideIndex);
    };

    const handlePlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const slideIndex = Number(
            e.currentTarget.classList.value
                .split(" ")
                .find((item) => !isNaN(+item)),
        );
        setPlaying(slideIndex);
    };

    const setPlaying = (index: number) => {
        if (index !== playingVideoIndex) {
            setPlayingVideoIndex(index);
            setIsPlaying(true);
        }

        if (index === playingVideoIndex) {
            setIsPlaying((prev) => !prev);
        }
    };

    return (
        <VibeSC id="vibe">
            <SectionTitleSC>
                <Trans i18nKey={"vibeTitle"}>Вайб вашего отдыха</Trans>
            </SectionTitleSC>
            <VideoSliderSC>
                <Slider {...settings}>
                    {contentfulListOfVideoForSlider.videoList.map(
                        (video: string, index: number) => (
                            <SlideWrapperSC
                                key={index}
                                onClick={handleVideoClick}
                            >
                                <PlaySC
                                    $isShow={
                                        isPlaying && playingVideoIndex === index
                                    }
                                    onClick={handlePlayClick}
                                    className={`${index}`}
                                    aria-label="play"
                                >
                                    <Videoplay />
                                </PlaySC>
                                <ReactPlayer
                                    key={index}
                                    url={video}
                                    width="100%"
                                    height="auto"
                                    playsinline
                                    playing={
                                        isPlaying && playingVideoIndex === index
                                    }
                                    className={`${index}`}
                                />
                            </SlideWrapperSC>
                        ),
                    )}
                </Slider>
            </VideoSliderSC>
        </VibeSC>
    );
};
