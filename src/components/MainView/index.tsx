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
import { graphql, useStaticQuery } from "gatsby";
import { HotSaleTooltip } from "./HotSaleTooltip";

export const MainView = () => {
    const { contentfulServices } = useStaticQuery(graphql`
        query SurfService {
            contentfulServices(nameEn: { ne: "Surfcamp" }) {
                nameEn
                nameRu
                nameUk
                price
                salePrice
                contentful_id
            }
        }
    `);
    return (
        <MainSectionSC>
            <HotSaleTooltip />
            <WrapperSC>
                <TitleSC>
                    <Trans i18nKey={"title-1"}>Серфинг неделя</Trans>{" "}
                    <BtnInTitleWrapperSC>
                        <VideoButton />
                    </BtnInTitleWrapperSC>
                    <Trans i18nKey={"title-2"}>на Канарских островах</Trans>
                </TitleSC>
                <PriceWrapperSC>
                    <PriceSC>
                        <Trans i18nKey={"from"}>от</Trans>{" "}
                        {contentfulServices.salePrice ||
                            contentfulServices.price}
                        €
                    </PriceSC>
                    <ActionLink
                        to={`/service/${contentfulServices.contentful_id}`}
                    />
                </PriceWrapperSC>
                <BtnWrapperSC>
                    <VideoButton />
                </BtnWrapperSC>
            </WrapperSC>
        </MainSectionSC>
    );
};
