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
import { Trans, I18nContext } from "gatsby-plugin-react-i18next";

type Props = {
    price: number | null;
    salePrice: number | null;
    nameRu: string | null;
    nameUk: string | null;
    nameEn: string | null;
    link: string | null;
    serviceCardPhoto: any;
};

export const Card = ({
    price,
    salePrice,
    nameRu,
    nameUk,
    nameEn,
    link,
    serviceCardPhoto,
}: Props) => {
    const { i18n } = React.useContext(I18nContext);
    const names: Record<string, string | null> = {
        ru: nameRu,
        uk: nameUk,
        en: nameEn,
    };
    const usedName = names[i18n.language];
    const image = getImage(
        serviceCardPhoto as ImageDataLike,
    ) as IGatsbyImageData;

    return (
        <CardSC to={`/service/${link}`}>
            <CardPhotoSC>
                <GatsbyImage image={image} alt="Service Photo" />
            </CardPhotoSC>
            <CardInfoSC>
                <PricesWrapperSC>
                    <PriceSC>{salePrice ? salePrice : price} €</PriceSC>
                    {salePrice && <OldPriceSC>{price} €</OldPriceSC>}
                </PricesWrapperSC>
                <CardNameSC>{usedName}</CardNameSC>
                <CardLinkSC>
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
