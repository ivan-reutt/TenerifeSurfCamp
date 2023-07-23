import React, { useState } from "react";
import { Modal } from "../Modal";
import { SURF_TITLE, PRICE_TITLE, SURF_TEXT, PRICE_TEXT } from "./constants";
import {
    InfoBlockSC,
    InfoItemSC,
    InfoItemsWrapperSC,
    ItemTextSC,
    ModalTextSC,
    ModalTitleSC,
    ModalContentSC,
} from "./styled";

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
    };

    const handleClickSurf = () => {
        setModalType(ModalType.SURF);
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
    return (
        <>
            <InfoBlockSC>
                <InfoItemSC>Погода на Тенерифе </InfoItemSC>
                <InfoItemsWrapperSC>
                    <InfoItemSC onClick={handleClickPrice}>
                        <ItemTextSC>Цены на Тенерифе</ItemTextSC>
                        <img src="/images/arrowright.svg" alt="arrow-right" />
                    </InfoItemSC>
                    <InfoItemSC onClick={handleClickSurf}>
                        <ItemTextSC>Серфинг на Тенерифе</ItemTextSC>
                        <img src="/images/arrowright.svg" alt="arrow-right" />
                    </InfoItemSC>
                </InfoItemsWrapperSC>
            </InfoBlockSC>
            {modalType && (
                <Modal onClose={() => setModalType(undefined)}>
                    <ModalContentSC>{renderModalContent()}</ModalContentSC>
                </Modal>
            )}
        </>
    );
};
