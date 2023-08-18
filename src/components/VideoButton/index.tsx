import React, { useState } from "react";
import {
    ButtonSC,
    GreyTextSC,
    PlayIconSC,
    VideoSC,
    VideoWrapperSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import Play from "src/icons/play.svg";
import { Modal } from "components/Modal";

export const VideoButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

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
                <Modal onClose={handleClose}>
                    <VideoWrapperSC>
                        <VideoSC
                            controls
                            preload="none"
                            autoPlay
                            playsInline
                            webkit-playsinline
                        >
                            <source
                                src="https://dl.dropboxusercontent.com/s/6rfkiz5p9z4z132/IMG_0988.mp4?dl=0"
                                type="video/mp4"
                            />
                        </VideoSC>
                    </VideoWrapperSC>
                </Modal>
            )}
        </>
    );
};
