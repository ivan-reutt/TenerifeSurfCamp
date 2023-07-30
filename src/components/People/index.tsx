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

export const People = () => {
    return (
        <PeolpeSC id="about">
            <SubTitleSC>Классные люди собираются вместе</SubTitleSC>
            <PeopleCardWrapperSC>
                <PeopleCardBlueSC>
                    <CardTitleSC>
                        Количество людей, посетившие лагерь
                    </CardTitleSC>
                    <BigCardTextSC>2000+</BigCardTextSC>
                    <ActionButton colorType={ColorTypes.WHITE}>
                        Записаться в лагерь
                    </ActionButton>
                </PeopleCardBlueSC>
                <PeopleCardSC>
                    <CardTitleSC>Что мы делаем?</CardTitleSC>
                    <TextSC>
                        FunVibe – это невероятный микс из экстрима, солнца и
                        океана! Мы занимаемся этим более 4 лет на острове
                        Тенерифе. Каждый наш инструктор имеет соответствующую
                        лицензию, позволяющую нам работать качественно
                        и безопасно.
                    </TextSC>
                </PeopleCardSC>
            </PeopleCardWrapperSC>
        </PeolpeSC>
    );
};
