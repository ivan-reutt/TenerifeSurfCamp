import React from "react";
import { VibeSC, SubTitleSC, VideoSlider } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

export const Vibe = () => {
    return (
        <VibeSC id="vibe">
            <SubTitleSC>
                <Trans i18nKey={"vibeTitle"}>Вайб вашего отдыха</Trans>
            </SubTitleSC>
            <VideoSlider />
        </VibeSC>
    );
};
