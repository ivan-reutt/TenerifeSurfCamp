import React, { useState } from "react";
import { VibeSC, VideoSlider, PlaySC, SlideWrapperSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { SectionTitleSC } from "src/layouts/common";
import Slider, { Settings } from "react-slick";
import ReactPlayer from "react-player";
import Videoplay from "src/icons/videoplay.svg";

export const Vibe = () => {
    const [playingVideoIndex, setPlayingVideoIndex] = useState<number>();
    const [isPlaying, setIsPlaying] = useState<boolean>();
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

    const videoArray = [
        "https://dl.dropboxusercontent.com/s/czdctpu7b1g0x6r/9b377431acf74d99ba3c1b45e3cfb679.MP4?dl=0",
        "https://dl.dropboxusercontent.com/s/598kx6ydcoc5w90/00b137782dff4e44958be051b95481bf.MP4?dl=0",
        "https://dl.dropboxusercontent.com/s/7vyswe6ews266lc/1080p_Match_Framerate%20%281%29.MP4?dl=0",
        "https://dl.dropboxusercontent.com/s/ljzw3g7w2p5ytg5/1080p_Match_Framerate%20%282%29.MP4?dl=0",
        "https://dl.dropboxusercontent.com/s/3xcah667qbmhwme/IMG_7311.MP4?dl=0",
        "https://dl.dropboxusercontent.com/s/mduach5acwwrrqj/IMG_8205.MP4?dl=0",
        "https://dl.dropboxusercontent.com/s/2jrxt4mxnxka6tv/1080p_Match_Framerate.mov?dl=0",
        "https://dl.dropboxusercontent.com/s/g9vdpocw168j2kx/1080p_Match_Framerate.MP4?dl=0",
    ];

    const handleVideoClick = (e: React.MouseEvent<HTMLElement>) => {
        const slideIndex = Number(e.target.parentNode.classList.value);
        setPlaying(slideIndex);
    };

    const handlePlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        const slideIndex = Number(
            e.currentTarget.classList.value
                .split(" ")
                .find((item) => !isNaN(item)),
        );
        setPlaying(slideIndex);
    };

    const setPlaying = (index: number) => {
        if (+index !== playingVideoIndex) {
            setPlayingVideoIndex(index);
            setIsPlaying(true);
        }

        if (+index === playingVideoIndex) {
            setIsPlaying((prev) => !prev);
        }
    };

    return (
        <VibeSC id="vibe">
            <SectionTitleSC>
                <Trans i18nKey={"vibeTitle"}>Вайб вашего отдыха</Trans>
            </SectionTitleSC>
            <VideoSlider>
                <Slider {...settings}>
                    {videoArray.map((video, index) => (
                        <SlideWrapperSC onClick={handleVideoClick}>
                            <PlaySC
                                $isShow={
                                    isPlaying && playingVideoIndex === index
                                }
                                onClick={handlePlayClick}
                                className={`${index}`}
                            >
                                <Videoplay />
                            </PlaySC>
                            <ReactPlayer
                                key={index}
                                url={video}
                                width="100%"
                                height="auto"
                                // style={{
                                //     position: "absolute",
                                //     top: 0,
                                //     left: 0,
                                // }}
                                playing={
                                    isPlaying && playingVideoIndex === index
                                }
                                className={`${index}`}
                            />
                        </SlideWrapperSC>
                    ))}
                </Slider>
            </VideoSlider>
        </VibeSC>
    );
};
