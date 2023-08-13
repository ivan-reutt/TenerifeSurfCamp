import React from "react";
import { ActionButton, ColorTypes } from "components/ActionButton";
import {
    AboutSC,
    AboutCardWrapperSC,
    AboutCardSC,
    AboutCardBlueSC,
    CardTitleSC,
    BigCardTextSC,
    TextSC,
} from "./styled";
import { SectionTitleSC } from "src/layouts/common";
import { Trans } from "gatsby-plugin-react-i18next";

export const About = () => {
    return (
        <AboutSC id="about">
            <SectionTitleSC>
                <Trans i18nKey={"aboutTitle"}>
                    Классные люди собираются вместе
                </Trans>
            </SectionTitleSC>
            <AboutCardWrapperSC>
                <AboutCardBlueSC>
                    <CardTitleSC>
                        <Trans i18nKey={"aboutLeftCard"}>
                            Количество людей, посетившие лагерь
                        </Trans>
                    </CardTitleSC>
                    <BigCardTextSC>2000+</BigCardTextSC>
                    <ActionButton href="#footer" colorType={ColorTypes.WHITE} />
                </AboutCardBlueSC>
                <AboutCardSC>
                    <CardTitleSC>
                        <Trans i18nKey={"aboutRightCard"}>Что мы делаем?</Trans>
                    </CardTitleSC>
                    <TextSC>
                        <Trans i18nKey={"aboutRightText"}>
                            FunVibe – это невероятный микс из экстрима, солнца и
                            океана! Мы занимаемся этим более 4 лет на острове
                            Тенерифе. Каждый наш инструктор имеет
                            соответствующую лицензию, позволяющую нам работать
                            качественно и безопасно.
                        </Trans>
                    </TextSC>
                </AboutCardSC>
            </AboutCardWrapperSC>
        </AboutSC>
    );
};
