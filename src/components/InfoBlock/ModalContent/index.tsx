import React from "react";
import { ModalType } from "..";
import { SURF_TITLE, PRICE_TITLE, SURF_TEXT, PRICE_TEXT } from "../constants";
import { ModalTextSC, ModalTitleSC, ModalContentSC } from "./styled";

interface IProps {
    modalType: ModalType;
}

export const ModalContent = ({ modalType }: IProps) => {
    const isSurfType = modalType === ModalType.SURF;
    const title = isSurfType ? SURF_TITLE : PRICE_TITLE;
    const textArray = isSurfType ? SURF_TEXT : PRICE_TEXT;
    return (
        <ModalContentSC>
            <ModalTitleSC>{title}</ModalTitleSC>
            {textArray.map((item, index) => (
                <ModalTextSC key={index}>{item}</ModalTextSC>
            ))}
        </ModalContentSC>
    );
};
