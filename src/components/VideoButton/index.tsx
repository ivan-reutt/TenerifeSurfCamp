import React, { useRef, useCallback, useEffect, useState } from "react";
import {
    ButtonSC,
    GreyTextSC,
    PlayIconSC,
    VideoOverlaySC,
    VideoSC,
    VideoWrapperSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import Play from "src/icons/play.svg";

export const VideoButton: React.FC = () => {
    const ref = useRef<HTMLVideoElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpen(true);
    };
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                isOpen &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        },
        [isOpen],
    );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <>
            <ButtonSC onClick={handleClick}>
                <PlayIconSC>
                    <Play />
                </PlayIconSC>
                <Trans i18nKey={"videoBtn-1"}>Видео</Trans>
                <GreyTextSC>
                    <Trans i18nKey={"videoBtn-2"}>как это было</Trans>
                </GreyTextSC>
            </ButtonSC>
            {isOpen && (
                <VideoOverlaySC>
                    <VideoWrapperSC>
                        <VideoSC controls autoPlay ref={ref}>
                            <source
                                src="https://dl.dropboxusercontent.com/s/6rfkiz5p9z4z132/IMG_0988.mp4?dl=0"
                                type="video/mp4"
                            />
                        </VideoSC>
                    </VideoWrapperSC>
                </VideoOverlaySC>
            )}
        </>
    );
};
