import React from "react";
import { IconSC, HotSaleTooltipSC } from "./styled";
import { Trans, I18nContext } from "gatsby-plugin-react-i18next";
import { ArrowRight } from "components/icons/ArrowRight";
import HotSaleTag from "components/HotSaleTag";
import { graphql, useStaticQuery } from "gatsby";
import { capitalize } from "src/utils/makeFirstLetterUppercase";

export const HotSaleTooltip = () => {
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
        <HotSaleTooltipSC to={`/service/${contentfulServices.contentful_id}`}>
            <HotSaleTag />
            <Trans i18nKey={"hot-btn"}>{contentfulServices?.[nameField]}</Trans>
            <IconSC>
                <ArrowRight color="#000" />
            </IconSC>
        </HotSaleTooltipSC>
    );
};
