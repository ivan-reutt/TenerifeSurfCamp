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
    BgWrapperSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { HotSaleTooltip } from "./HotSaleTooltip";
import { useContentfulSurfServices } from "src/hooks/useContentfulSurfServices";
import { StaticImage } from "gatsby-plugin-image";
import { devices } from "src/styles/media";

export const MainView = () => {
    const { salePrice, price, contentful_id } = useContentfulSurfServices();
    const isMobile = window.matchMedia(devices.lg).matches;
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
            {isMobile && (
                <BgWrapperSC>
                    <StaticImage
                        src="../../images/main-mobile-bg.webp"
                        alt=""
                        formats={["auto", "webp", "avif"]}
                        placeholder="blurred"
                        imgStyle={{ height: "100%" }}
                        style={{ height: "100%" }}
                    />
                </BgWrapperSC>
            )}
        </MainSectionSC>
    );
};
