import React, { useState } from "react";
import { Modal } from "src/components/Modal";
import { ArrowRight } from "components/icons/ArrowRight";
import { SURF_TITLE, PRICE_TITLE, SURF_TEXT, PRICE_TEXT } from "./constants";
import {
    InfoBlockSC,
    InfoItemSC,
    InfoItemsWrapperSC,
    ItemTextSC,
    ModalTextSC,
    ModalTitleSC,
    ModalContentSC,
    IconSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";

enum ModalType {
    PRICE = "Price",
    SURF = "Surf",
}

const SurfModalContent = () => (
    <>
        <ModalTitleSC>{SURF_TITLE}</ModalTitleSC>
        {SURF_TEXT.map((item, index) => (
            <ModalTextSC key={index}>{item}</ModalTextSC>
        ))}
    </>
);

const PriceModalContent = () => (
    <>
        <ModalTitleSC>{PRICE_TITLE}</ModalTitleSC>
        {PRICE_TEXT.map((item, index) => (
            <ModalTextSC key={index}>{item}</ModalTextSC>
        ))}
    </>
);

export const InfoBlock = () => {
    const [modalType, setModalType] = useState<ModalType | undefined>();

    const handleClickPrice = () => {
        setModalType(ModalType.PRICE);
        document.body.classList.add("modal-open");
    };

    const handleClickSurf = () => {
        setModalType(ModalType.SURF);
        document.body.classList.add("modal-open");
    };
    const renderModalContent = () => {
        switch (modalType) {
            case ModalType.SURF:
                return <SurfModalContent />;
            case ModalType.PRICE:
                return <PriceModalContent />;
            default:
                return null;
        }
    };

    const handleClose = () => {
        setModalType(undefined);
    };
    return (
        <>
            <InfoBlockSC>
                <InfoItemSC>
                    <Trans i18nKey={"weather"}>Погода на Тенерифе</Trans>
                </InfoItemSC>
                <InfoItemsWrapperSC>
                    <InfoItemSC onClick={handleClickPrice}>
                        <ItemTextSC>
                            <Trans i18nKey={"prices"}>Цены на Тенерифе</Trans>
                        </ItemTextSC>
                        <IconSC>
                            <ArrowRight color="#000" />
                        </IconSC>
                    </InfoItemSC>
                    <InfoItemSC onClick={handleClickSurf}>
                        <ItemTextSC>
                            <Trans i18nKey={"surfing"}>
                                Серфинг на Тенерифе
                            </Trans>
                        </ItemTextSC>
                        <IconSC>
                            <ArrowRight color="#000" />
                        </IconSC>
                    </InfoItemSC>
                </InfoItemsWrapperSC>
            </InfoBlockSC>
            {modalType && (
                <Modal onClose={handleClose}>
                    <ModalContentSC>{renderModalContent()}</ModalContentSC>
                </Modal>
            )}
        </>
    );
};
