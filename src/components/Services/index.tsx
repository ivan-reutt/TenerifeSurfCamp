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
    name: any;
}

const tabsItems: ITab[] = [
    {
        type: TabsEnum.SURFING,
        name: <Trans i18nKey="serviceTabSurfing">Серфинг</Trans>,
    },
    {
        type: TabsEnum.TOUR,
        name: <Trans i18nKey="serviceTabTour">Экскурсии на Тенерифе</Trans>,
    },
    {
        type: TabsEnum.REST,
        name: <Trans i18nKey="serviceTabRest">Отдых на Тенерифе</Trans>,
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
