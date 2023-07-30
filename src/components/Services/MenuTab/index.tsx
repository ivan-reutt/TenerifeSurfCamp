import React from "react";
import { TabsEnum } from "..";
import { TabSC } from "./styled";

type Props = {
    isActive: boolean;
    type: TabsEnum;
    onClick: (selectedTab: TabsEnum) => void;
};

export const MenuTab = ({ isActive, type, onClick }: Props) => {
    const handleChange = () => {
        onClick(type);
    };

    return (
        <TabSC onClick={handleChange} isActive={isActive}>
            {type}
        </TabSC>
    );
};
