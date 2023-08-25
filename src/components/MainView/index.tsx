import React from "react";
import { ActionLink } from "components/ActionLink";
import { VideoButton } from "components/VideoButton";
import {
    MainSectionSC,
    TitleSC,
    WrapperSC,
    BtnInTitleWrapperSC,
    BtnWrapperSC,
    PriceSC,
    PriceWrapperSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { HotSaleTooltip } from "./HotSaleTooltip";
import { useContentfulSurfServices } from "src/hooks/useContentfulSurfServices";

export const MainView = () => {
    const { salePrice, price, contentful_id } = useContentfulSurfServices();
    return (
        <MainSectionSC>
            <HotSaleTooltip />
            <WrapperSC>
                <TitleSC>
                    <Trans i18nKey={"mainTitlePart1"}>Серфинг неделя</Trans>{" "}
                    <BtnInTitleWrapperSC>
                        <VideoButton />
                    </BtnInTitleWrapperSC>
                    <Trans i18nKey={"mainTitlePart2"}>
                        на Канарских островах
                    </Trans>
                </TitleSC>
                <PriceWrapperSC>
                    <PriceSC>
                        <Trans i18nKey={"mainFrom"}>от</Trans>{" "}
                        {salePrice || price}€
                    </PriceSC>
                    <ActionLink to={`/service/${contentful_id}`} />
                </PriceWrapperSC>
                <BtnWrapperSC>
                    <VideoButton />
                </BtnWrapperSC>
            </WrapperSC>
        </MainSectionSC>
    );
};
