import React from "react";
import { ActionButton } from "../ActionButton";
import { VideoButton } from "../VideoButton";
import { HeadSC, TitleSC, WrapperSC } from "./styled";

export const MainHead = () => {
    return (
        <HeadSC>
            <button>Горящий тур на вип-яхте</button>
            <WrapperSC>
                <TitleSC>
                    Серфинг неделя <VideoButton /> на Канарских островах
                </TitleSC>
                <ActionButton />
            </WrapperSC>
        </HeadSC>
    );
};
