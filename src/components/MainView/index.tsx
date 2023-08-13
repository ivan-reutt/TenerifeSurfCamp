import React from "react";
import { ActionButton } from "components/ActionButton";
import { VideoButton } from "components/VideoButton";
import {
    MainSectionSC,
    TitleSC,
    WrapperSC,
    BtnInTitleWrapperSC,
    BtnWrapperSC,
    IconSC,
    HotSaleTooltipSC,
} from "./styled";
import { Trans, I18nContext } from "gatsby-plugin-react-i18next";
import { ArrowRight } from "components/icons/ArrowRight";
import HotSaleTag from "components/HotSaleTag";
import { graphql, useStaticQuery } from "gatsby";
import { capitalize } from "src/utils/makeFirstLetterUppercase";

export const MainView = () => {
    const { i18n } = React.useContext(I18nContext);
    const langCode = capitalize(i18n.language);

    const { contentfulServices } = useStaticQuery(graphql`
        query SaleService {
            contentfulServices(salePrice: { ne: null }) {
                salePrice
                nameEn
                nameRu
                nameUk
                contentful_id
            }
        }
    `);
    const nameField = `name${langCode}` as keyof typeof contentfulServices;
    return (
        <MainSectionSC>
            <HotSaleTooltipSC>
                <HotSaleTag />
                <Trans i18nKey={"hot-btn"}>
                    {contentfulServices?.[nameField]}
                </Trans>
                <IconSC>
                    <ArrowRight color="#000" />
                </IconSC>
            </HotSaleTooltipSC>
            <WrapperSC>
                <TitleSC>
                    <Trans i18nKey={"title-1"}>Серфинг неделя</Trans>{" "}
                    <BtnInTitleWrapperSC>
                        <VideoButton />
                    </BtnInTitleWrapperSC>
                    <Trans i18nKey={"title-2"}>на Канарских островах</Trans>
                </TitleSC>
                <ActionButton href="#footer" />
                <BtnWrapperSC>
                    <VideoButton />
                </BtnWrapperSC>
            </WrapperSC>
        </MainSectionSC>
    );
};
