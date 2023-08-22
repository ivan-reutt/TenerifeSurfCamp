import React from "react";
import { HotSaleSC } from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

const HotSaleTag: React.FC = () => {
    return (
        <HotSaleSC>
            🔥
            <Trans i18nKey={"hotSale"}>горящая скидка</Trans>
        </HotSaleSC>
    );
};

export default HotSaleTag;
