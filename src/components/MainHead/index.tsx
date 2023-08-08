import React from "react";
import { ActionButton } from "components/ActionButton";
import { VideoButton } from "components/VideoButton";
import { HeadSC, TitleSC, WrapperSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

export const MainHead = () => {
    return (
        <HeadSC>
            <button>
                <Trans i18nKey={"hot-btn"}>Горящий тур на вип-яхте</Trans>
            </button>
            <WrapperSC>
                <TitleSC>
                    <Trans i18nKey={"title-1"}>Серфинг неделя</Trans>
                    <VideoButton />
                    <Trans i18nKey={"title-2"}>на Канарских островах</Trans>
                </TitleSC>
                <ActionButton />
            </WrapperSC>
        </HeadSC>
    );
};
