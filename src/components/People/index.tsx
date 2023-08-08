import React from "react";
import { ActionButton, ColorTypes } from "components/ActionButton";
import {
    PeolpeSC,
    SubTitleSC,
    PeopleCardWrapperSC,
    PeopleCardSC,
    PeopleCardBlueSC,
    CardTitleSC,
    BigCardTextSC,
    TextSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

export const People = () => {
    return (
        <PeolpeSC id="about">
            <SubTitleSC>
                <Trans i18nKey={"aboutTitle"}>
                    Классные люди собираются вместе
                </Trans>
            </SubTitleSC>
            <PeopleCardWrapperSC>
                <PeopleCardBlueSC>
                    <CardTitleSC>
                        <Trans i18nKey={"aboutLeftCard"}>
                            Количество людей, посетившие лагерь
                        </Trans>
                    </CardTitleSC>
                    <BigCardTextSC>2000+</BigCardTextSC>
                    <ActionButton colorType={ColorTypes.WHITE} />
                </PeopleCardBlueSC>
                <PeopleCardSC>
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
                </PeopleCardSC>
            </PeopleCardWrapperSC>
        </PeolpeSC>
    );
};
