import React from "react";
import { MenuContent } from "./MenuContent";
import { ServicesSC, MenuSC } from "./styled";
import { SectionTitleSC } from "src/layouts/common";
import { Trans } from "gatsby-plugin-react-i18next";

export enum TabsEnum {
    SURFING = "Surfing",
    TOUR = "Tour",
    REST = "Rest",
}

export const Services = () => {
    return (
        <ServicesSC id="entertainment">
            <SectionTitleSC>
                <Trans i18nKey="entertainmentTitle">Развлечения по душе</Trans>
            </SectionTitleSC>
            <MenuSC>
                <MenuContent activeTab={TabsEnum.SURFING} />
            </MenuSC>
        </ServicesSC>
    );
};
