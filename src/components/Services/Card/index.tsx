import React from "react";
import SaleIcon from "src/icons/sale-icon.svg";
import {
    CardSC,
    OldPriceSC,
    CardPhotoSC,
    PriceSC,
    PricesWrapperSC,
    CardInfoSC,
    CardNameSC,
    IconWrapperSC,
    CardLinkSC,
    SaleIconSC,
} from "./styled";
import { ArrowRight } from "components/icons/ArrowRight";
import {
    GatsbyImage,
    getImage,
    ImageDataLike,
    IGatsbyImageData,
} from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

type Props = {
    price?: number | null;
    salePrice?: number | null;
    name?: string | null;
    contentful_id?: string;
    serviceCardPhoto?: { gatsbyImageData: IGatsbyImageData | null } | null;
};

export const Card = ({
    price,
    salePrice,
    name,
    contentful_id,
    serviceCardPhoto,
}: Props) => {
    const image = getImage(
        serviceCardPhoto as ImageDataLike,
    ) as IGatsbyImageData;
    return (
        <CardSC>
            <CardPhotoSC>
                <GatsbyImage image={image} alt={"Service Photo"} />
            </CardPhotoSC>
            <CardInfoSC>
                <PricesWrapperSC>
                    <PriceSC>{salePrice ? salePrice : price} €</PriceSC>
                    {salePrice && <OldPriceSC>{price} €</OldPriceSC>}
                </PricesWrapperSC>
                <CardNameSC>{name}</CardNameSC>
                <CardLinkSC to={`/service/${contentful_id}`}>
                    <Trans i18nKey={"detailed"}>Подробнее</Trans>
                    <IconWrapperSC>
                        <ArrowRight color="#fff" />
                    </IconWrapperSC>
                </CardLinkSC>
            </CardInfoSC>
            {salePrice && (
                <SaleIconSC>
                    <SaleIcon />
                </SaleIconSC>
            )}
        </CardSC>
    );
};
