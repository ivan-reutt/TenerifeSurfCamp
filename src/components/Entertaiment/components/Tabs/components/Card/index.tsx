import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { ArrowRightIcon } from "../../../../../icons/ArrowRightIcon";
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
} from "./styled";

type Props = {
    price: string;
    salePrice?: string;
    name: string;
};

export const Card = ({ price, salePrice, name }: Props) => {
    return (
        <CardSC>
            <CardPhotoSC>
                <img src="/images/image2.jpg" />
            </CardPhotoSC>
            <CardInfoSC>
                <PricesWrapperSC>
                    <PriceSC>{salePrice ? salePrice : price} $</PriceSC>
                    {salePrice && <OldPriceSC>{price} $</OldPriceSC>}
                </PricesWrapperSC>
                <CardNameSC>{name}</CardNameSC>

                <CardLinkSC>
                    Подробнее
                    <IconWrapperSC>
                        <ArrowRightIcon color="#fff" />
                    </IconWrapperSC>
                </CardLinkSC>
            </CardInfoSC>
        </CardSC>
    );
};
