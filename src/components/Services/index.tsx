import React, { useState } from "react";
import { MenuContent } from "./MenuContent";
import { MenuTab } from "./MenuTab";
import { ServicesSC, SubTitleSC, MenuSC, TabsWrapperSC } from "./styled";

export enum TabsEnum {
    SURFING = "Surfing",
    TOUR = "Tour",
    REST = "Rest",
}

const tabsArray = [TabsEnum.SURFING, TabsEnum.TOUR, TabsEnum.REST];

export const Entertaiment = () => {
    const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.SURFING);

    const handleChange = (selectedTab: TabsEnum) => {
        setActiveTab(selectedTab);
    };
    return (
        <ServicesSC id="entertainment">
            <SubTitleSC>Развлечения по душе</SubTitleSC>
            <MenuSC>
                <TabsWrapperSC>
                    {tabsArray.map((item: TabsEnum) => (
                        <MenuTab
                            onClick={handleChange}
                            isActive={item === activeTab}
                            type={item}
                        />
                    ))}
                </TabsWrapperSC>
                <MenuContent activeTab={activeTab} />
            </MenuSC>
        </ServicesSC>
    );
};
