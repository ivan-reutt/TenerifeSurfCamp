import React, { useState } from "react";
import { Button } from "../../../Button";
import { Card } from "./components/Card";
import { Tab } from "./components/Tab";
import { TabsWrapperSC, CatalogSC, CardsWrapperSC } from "./styled";

export enum TabsEnum {
    SURFING = "Серфинг",
    TRIP = "Экскурсии на Тенерифе",
    REST = "Отдых на Тенерифе",
}

const tabsArray = [TabsEnum.SURFING, TabsEnum.TRIP, TabsEnum.REST];

const cardArray = [
    {
        name: "Тур на вип яхте Тенерифе",
        salePrice: "790",
        price: "950",
    },
    {
        name: "Ночной Тейде",
        salePrice: "790",
        price: "950",
    },
    {
        name: "Ущелье Маска",
        salePrice: "790",
        price: "950",
    },
    {
        name: "Teide at night. Hiking in Tenerife: sunset and stars on Teide.",
        salePrice: "790",
        price: "950",
    },
    {
        name: "Хайкинг по кальдере",
        salePrice: "790",
        price: "950",
    },
];

export const Catalog = () => {
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.SURFING);
    const [isShowAll, setIsShowAll] = useState<boolean>(false);

    const handleChange = (selectedTab: TabsEnum) => {
        setActiveTab(selectedTab);
    };

    const cardList = cardArray.filter((item, index) =>
        isShowAll ? item : index < 4,
    );

    return (
        <CatalogSC>
            <TabsWrapperSC>
                {tabsArray.map((item: TabsEnum) => (
                    <Tab
                        onClick={handleChange}
                        isActive={item === activeTab}
                        type={item}
                    />
                ))}
            </TabsWrapperSC>
            <CardsWrapperSC>
                {cardList.map((item, index) => (
                    <Card
                        key={`${item.name}_${index}`}
                        price={item.price}
                        name={item.name}
                        salePrice={item.salePrice}
                    />
                ))}
            </CardsWrapperSC>
            {cardArray.length > 4 && !isShowAll && (
                <Button onClick={() => setIsShowAll(true)}>
                    Показать больше
                </Button>
            )}
        </CatalogSC>
    );
};
