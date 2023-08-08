import React from "react";
import { TabsEnum } from "..";
import { TabSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

type Props = {
    isActive: boolean;
    type: TabsEnum;
    name: string;
    onClick: (selectedTab: TabsEnum) => void;
};

export const MenuTab = ({ isActive, type, onClick, name }: Props) => {
    const handleChange = () => {
        onClick(type);
    };

    return (
        <TabSC onClick={handleChange} $isActive={isActive}>
            <Trans>{name}</Trans>
        </TabSC>
    );
};
