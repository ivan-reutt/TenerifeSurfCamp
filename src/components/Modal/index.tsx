import React from "react";
import { ModalSC, OverlaySC, CloseSC } from "./styled";
import Close from "src/icons/close.svg";

type Props = {
    children?: React.ReactNode;
    onClose: () => void;
    withPadding?: boolean;
    isOrderModal?: boolean;
    style?: React.CSSProperties;
};

export const Modal: React.FC<Props> = ({
    children,
    onClose,
    style,
    withPadding,
    isOrderModal,
}) => {
    const handleClose = () => {
        document.body.classList.remove("modal-open");
        onClose();
    };
    const handleClickOutside = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };
    return (
        <OverlaySC onClick={handleClickOutside}>
            <ModalSC
                style={style}
                $withPadding={withPadding}
                $isOrderModal={isOrderModal}
            >
                <CloseSC onClick={handleClose}>
                    <Close />
                </CloseSC>
                {children}
            </ModalSC>
        </OverlaySC>
    );
};
