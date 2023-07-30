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

type Props = {
    price: string;
    salePrice?: string;
    name: string;
    isSale?: boolean;
};

export const Card = ({ price, salePrice, name }: Props) => {
    return (
        <CardSC>
            <CardPhotoSC>
                <img src="/images/image2.jpg" />
            </CardPhotoSC>
            <CardInfoSC>
                <PricesWrapperSC>
                    <PriceSC>{salePrice ? salePrice : price} €</PriceSC>
                    {salePrice && <OldPriceSC>{price} €</OldPriceSC>}
                </PricesWrapperSC>
                <CardNameSC>{name}</CardNameSC>

                <CardLinkSC to="/">
                    Подробнее
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
