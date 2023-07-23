import React, { useState } from "react";
import { ActionButton, ColorTypes } from "../ActionButton";
import { Button } from "../Button";
import {
    NewsSC,
    SubTitleSC,
    NewsWrapperSC,
    NewsCardSC,
    CardPhotoSC,
    CardInfoSC,
    DateSC,
    HeadingSC,
    DescriptionSC,
} from "./styled";

const newsArray = [
    {
        date: "Mar 20, 2022",
        caption: "New product unlocked: Blush",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Complete the Compensation Plan Quiz",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "New product introduction. Special invitation only",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Моя первая волна: сколько нужно учиться серфингу?",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Complete the Compensation Plan Quiz",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "New product introduction. Special invitation only",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Моя первая волна: сколько нужно учиться серфингу?",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Complete the Compensation Plan Quiz",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "New product introduction. Special invitation only",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Моя первая волна: сколько нужно учиться серфингу?",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "Complete the Compensation Plan Quiz",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
    {
        date: "Mar 20, 2022",
        caption: "New product introduction. Special invitation only",
        desc: "The USA and Canada are among the top study destinations worldwide ...",
    },
];

export const NewsSection = () => {
    const [isShowAll, setIsShowAll] = useState<boolean>(false);

    const newsList = newsArray.filter((item, index) =>
        isShowAll ? item : index < 9,
    );

    return (
        <NewsSC>
            <SubTitleSC>Новости серфлагеря</SubTitleSC>
            <NewsWrapperSC>
                {newsList.map((item, index) => (
                    <NewsCardSC key={`${item.date}_${index}`}>
                        <CardPhotoSC>
                            <img src="/images/Newc_Card.jpg" />
                        </CardPhotoSC>
                        <CardInfoSC>
                            <DateSC>{item.date}</DateSC>
                            <HeadingSC>{item.caption}</HeadingSC>
                            <DescriptionSC>{item.desc}</DescriptionSC>
                        </CardInfoSC>
                    </NewsCardSC>
                ))}
            </NewsWrapperSC>
            {newsArray.length > 9 && !isShowAll && (
                <Button onClick={() => setIsShowAll(true)}>
                    Показать больше
                </Button>
            )}
        </NewsSC>
    );
};
