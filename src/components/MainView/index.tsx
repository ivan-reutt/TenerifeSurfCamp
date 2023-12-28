import React, { useEffect, useState } from "react";
import {
    MainSectionSC,
    TitleSC,
    WrapperSC,
    PriceSC,
    PriceWrapperSC,
    BgWrapperSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { useContentfulSurfServices } from "src/hooks/useContentfulSurfServices";
import { StaticImage } from "gatsby-plugin-image";
import { devices } from "src/styles/media";
import { ActionButton } from "components/ActionButton";
import { Modal } from "components/Modal";
import { ModalTitleSC } from "src/layouts/service-item";
import { Form } from "components/Form";

export const MainView = () => {
    const { salePrice, price, nameEn } = useContentfulSurfServices();
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        setIsMobile(window.matchMedia(devices.lg).matches);
    }, []);

    const handleClickSignUp = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <MainSectionSC>
            <WrapperSC>
                <TitleSC>
                    <Trans i18nKey={"mainTitlePart1"}>Серфинг неделя</Trans>{" "}
                    <Trans i18nKey={"mainTitlePart2"}>
                        на Канарских островах
                    </Trans>
                </TitleSC>
                <PriceWrapperSC>
                    <ActionButton onClick={handleClickSignUp}></ActionButton>
                </PriceWrapperSC>
            </WrapperSC>
            {isOpen && (
                <Modal onClose={handleClose} isOrderModal>
                    <ModalTitleSC>
                        <Trans i18nKey={"mainViewModalTitle"}>
                            Закажите свой идеальный волнующий отдых! Оставьте
                            свои контактные данные для консультации.
                        </Trans>
                    </ModalTitleSC>
                    <Form isOrder serviceToOrder={nameEn} />
                </Modal>
            )}
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
