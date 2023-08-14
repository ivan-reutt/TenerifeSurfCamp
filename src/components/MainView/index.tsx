import React from "react";
import { ActionButton } from "components/ActionButton";
import { VideoButton } from "components/VideoButton";
import {
    MainSectionSC,
    TitleSC,
    WrapperSC,
    BtnInTitleWrapperSC,
    BtnWrapperSC,
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
                <ActionButton
                    href={`/service/${contentfulServices.contentful_id}`}
                />
                <BtnWrapperSC>
                    <VideoButton />
                </BtnWrapperSC>
            </WrapperSC>
        </MainSectionSC>
    );
};
