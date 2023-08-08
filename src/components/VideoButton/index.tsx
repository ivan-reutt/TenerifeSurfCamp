import React from "react";
import { ButtonSC, GreyTextSC, PlayIconSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import Play from "src/icons/play.svg";

export const VideoButton: React.FC = () => {
    return (
        <ButtonSC>
            <PlayIconSC>
                <Play />
            </PlayIconSC>
            <Trans i18nKey={"videoBtn-1"}>Видео</Trans>
            <GreyTextSC>
                <Trans i18nKey={"videoBtn-2"}>как это было</Trans>
            </GreyTextSC>
        </ButtonSC>
    );
};
