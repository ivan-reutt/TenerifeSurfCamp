import React, { useState } from "react";
import { MenuContent } from "./MenuContent";
import { MenuTab } from "./MenuTab";
import { ServicesSC, MenuSC, TabsWrapperSC } from "./styled";
import { SectionTitleSC } from "src/layouts/common";
import { Trans } from "gatsby-plugin-react-i18next";

export enum TabsEnum {
    SURFING = "Surfing",
    TOUR = "Tour",
    REST = "Rest",
}

interface ITab {
    type: TabsEnum;
    name: string;
}

const tabsItems: ITab[] = [
    {
        type: TabsEnum.SURFING,
        name: "Серфинг",
    },
    {
        type: TabsEnum.TOUR,
        name: "Экскурсии на Тенерифе",
    },
    {
        type: TabsEnum.REST,
        name: "Отдых на Тенерифе",
    },
];

export const Services = () => {
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.SURFING);

    const handleChange = (selectedTab: TabsEnum) => {
        setActiveTab(selectedTab);
    };
    return (
        <ServicesSC id="entertainment">
            <SectionTitleSC>
                <Trans i18nKey="entertainmentTitle">Развлечения по душе</Trans>
            </SectionTitleSC>
            <MenuSC>
                <TabsWrapperSC>
                    {tabsItems.map((item) => (
                        <MenuTab
                            key={item.type}
                            onClick={handleChange}
                            isActive={item.type === activeTab}
                            type={item.type}
                            name={item.name}
                        />
                    ))}
                </TabsWrapperSC>
                <MenuContent activeTab={activeTab} />
            </MenuSC>
        </ServicesSC>
    );
};
